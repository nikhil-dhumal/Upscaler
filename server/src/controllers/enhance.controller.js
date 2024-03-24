import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url" 
import util from "util"
import { exec } from "child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputDir = path.join(__dirname, "../../super_resolution/input")
const outputDir = path.join(__dirname, "../../super_resolution/output")
const pythonScriptDirectory = path.join(__dirname, "../../super_resolution")

const enhance = async (req, res) => {
  try {
    await fs.mkdir(outputDir, { recursive: true })

    console.log(req.file);
    const fileName = req.file.originalname
    const filePath = path.join(inputDir, fileName)
    const enhancedFilePath = path.join(outputDir, `enhanced_${fileName}`)

    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(400).json({ message: "File not found." });
    }

    const execPromise = util.promisify(exec)
    await execPromise(`python test.py -filename ${fileName}`, { cwd: pythonScriptDirectory })

    try {
      await fs.access(enhancedFilePath);
    } catch (error) {
      return res.status(400).json({ message: "Enhanced file not found." });
    }
    
    const fileData = await fs.readFile(enhancedFilePath)
    const dataUrl = `data:image/jpegbase64,${fileData.toString('base64')}`

    res.once("finish", async () => {
      try {
        await fs.unlink(filePath)
        await fs.unlink(enhancedFilePath)
      } catch (err) {
        console.error(`Failed to delete files: ${err}`)
      }
    })
    
    return res.status(200).json({
      fileName,
      data: dataUrl
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Oops! Something went wrong."
    })
  }
}

export default {
  enhance
}