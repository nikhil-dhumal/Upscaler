import multer from "multer"
import { diskStorage } from "multer"
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url" 

const storage = multer.memoryStorage()

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