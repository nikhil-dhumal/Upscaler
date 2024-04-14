import axios from "axios"

const scoringURI = process.env.SCORING_URI

const enhance = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image file provided" })

    const { file } = req
    const imgData = file.buffer.toString("base64")

    const response = await axios.post(scoringURI, { image: imgData }, {
      timeout: 300000
    })

    if (response.status == 200) {
      const receivedData = JSON.parse(response.data)

      if (receivedData.error) {
        console.error("Error from server: ", receivedData.error)
        return res.status(400).json({ error: receivedData.error })
      }

      const enhancedImgData = receivedData.image

      if (enhancedImgData) {
        const filename = "enhaced_" + file.originalname
        const imgUrl = `data:image/jpegbase64,${enhancedImgData}`

        return res.status(200).json({ filename, image: imgUrl })
      } else {
        console.error("Error: No enhanced image data received from the server")
        return res.status(500).json({ error: "Error processing the image" })
      }
    } else {
      console.error("Error:", response.data)
      return res.status(500).json({ error: "Error processing the image" })
    }

    return res.status(200).json({ data: response.data })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 500,
      message: "Oops! Something went wrong."
    })
  }
}

export default {
  enhance
}