import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url" 
import { execSync } from "child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputDir = path.join(__dirname, "../super_resolution/input")
const outputDir = path.join(__dirname, "../super_resolution/output")

const enhance = async (req, res) => {
  try {
    execSync("../super_resolution/text.py")

    try {
      await fs.access(enhancedDirectory)
    } catch (err) {
      return res.status(404).json({ 
        status: 404, 
        message: 'Process not found'
      })
    }

    const imageName = await fs.readdir(outputDir)
    const filePath = path.join(outputDir, imageName)
    const fileData = await fs.readFile(filePath)

    const dataUrl = `data:image/jpegbase64,${fileData.toString('base64')}`
    
    return res.status(200).json({
      fileName: imageName,
      data: dataUrl
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Oops! Something went wrong."
    })
  }
}

export default {
  enhance
}