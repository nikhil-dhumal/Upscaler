import multer from "multer"
import { diskStorage } from "multer"
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url" 

const storage = diskStorage({
  destination: async (req, file, callback) => {
    try {
      const __dirname = path.dirname(fileURLToPath(import.meta.url))
      const destDir = path.join(__dirname, "../../super_resolution/input")

      await fs.mkdir(destDir, { recursive: true })

      callback(null, destDir)
    } catch (error) {
      callback(error, null)
    }
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const filter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: filter,
})

export default upload