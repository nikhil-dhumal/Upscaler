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
    const id = req.params.id
    const originalName = req.file.originalname
    const modifiedFileName = `${id}_${originalName}`
    const execPromise = util.promisify(exec)
    await execPromise(`python test.py -filename ${modifiedFileName}`, { cwd: pythonScriptDirectory })

    const filePath = path.join(inputDir, modifiedFileName)
    const enhancedFilePath = path.join(outputDir, `enhanced_${modifiedFileName}`)
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
      fileName: originalName,
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