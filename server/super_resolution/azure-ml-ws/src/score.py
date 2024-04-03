import io
import json
from PIL import Image
import numpy as np
import torch
import RRDBNet_arch as arch
from azureml.core.model import Model


def init():
    global model
    global device

    model_path = Model.get_model_path("image-super-resolution")

    # Check if GPU is available
    if torch.cuda.is_available():
        device = torch.device("cuda")
    else:
        device = torch.device("cpu")

    model = arch.RRDBNet(3, 3, 64, 23, gc=32)
    model.load_state_dict(torch.load(model_path, map_location=device), strict=True)
    model.eval()
    model = model.to(device)


def run(raw_data):
    try:
        # Load the JSON payload
        data = json.loads(raw_data)
        # Extract the image data from the JSON payload
        img_data = data["image"]

        # Decode the image data and load it as a PIL Image
        img = Image.open(io.BytesIO(img_data))
        img = np.array(img)
        img = img * 1.0 / 255
        img = torch.from_numpy(np.transpose(img[:, :, [2, 1, 0]], (2, 0, 1))).float()
        img_LR = img.unsqueeze(0)

        # Move image to GPU if available
        img_LR = img_LR.to(device)

        # Enhance image using the loaded model
        with torch.no_grad():
            output = model(img_LR).data.squeeze().float().cpu().clamp_(0, 1).numpy()

        # Convert the enhanced image data to PIL Image
        output = np.transpose(output[[2, 1, 0], :, :], (1, 2, 0))
        output = (output * 255.0).round().astype(np.uint8)
        output_image = Image.fromarray(output)

        # Convert enhanced image to bytes
        output_bytes = io.BytesIO()
        output_image.save(output_bytes, format="PNG")
        output_bytes.seek(0)
        enhanced_img_data = output_bytes.read()

        # Return the enhanced image data with the same key "image"
        return {"image": enhanced_img_data}
    except Exception as e:
        return str(e)
