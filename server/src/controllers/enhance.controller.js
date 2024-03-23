import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url" 
import util from "util"
import { exec } from "child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputDir = path.join(__dirname, "../../super_resolution/input")
const outputDir = path.join(__dirname, "../../super_resolution/output")
const testFilePath = path.join(__dirname, "../../super_resolution/test.py")

const enhance = async (req, res) => {
  try {
    const execPromise = util.promisify(exec)
    const pythonScriptDirectory = path.join(__dirname, "../../super_resolution")
    await execPromise(`python ${testFilePath}`, { cwd: pythonScriptDirectory })

    const imageName = await fs.readdir(outputDir)
    const filePath = path.join(outputDir, imageName[0])
    const fileData = await fs.readFile(filePath)

    const dataUrl = `data:image/jpegbase64,${fileData.toString('base64')}`

    // await fs.rm(inputDir, { recursive: true, force: true })
    // await fs.rm(outputDir, { recursive: true, force: true })
    
    return res.status(200).json({
      fileName: imageName,
      data: dataUrl
    })

    return res.status(200).json({message: ""})
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