import multer from "multer"

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