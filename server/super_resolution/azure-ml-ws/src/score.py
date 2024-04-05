import io
import json
import base64
import ast
from PIL import Image
import numpy as np
import torch
import RRDBNet_arch as arch
from azureml.core.model import Model


# Initialize the model and device
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


# Process the JSON payload containing the file
def run(raw_data):
    try:
        # Check for empty payload
        if not raw_data:
            return json.dumps({"error": "Empty payload received"})

        # Load the JSON payload
        unescaped_data = ast.literal_eval(raw_data)
        data = json.loads(unescaped_data)

        # Verify that the "image" key exists in the JSON payload
        if "image" not in data:
            return json.dumps({"error": "Image data not found in the JSON payload"})

        # Extract the image data from the JSON payload
        image_base64 = data["image"]

        # Decode the Base64 image data
        image_data = base64.b64decode(image_base64)

        # Load the image from the decoded data
        img = Image.open(io.BytesIO(image_data))
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

        # Encode the enhanced image data using Base64
        encoded_enhanced_img_data = base64.b64encode(enhanced_img_data).decode("utf-8")

        # Return the encoded enhanced image data with the same key "image"
        return json.dumps({"image": encoded_enhanced_img_data})
    except json.JSONDecodeError as json_error:
        return json.dumps({"error": "Failed to decode JSON payload"})
    except KeyError as key_error:
        return json.dumps({"error": "Missing required key in JSON payload"})
    except Exception as e:
        return json.dumps({"error": str(e)})
