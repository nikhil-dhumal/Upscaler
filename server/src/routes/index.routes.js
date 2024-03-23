import express from "express"
import enhanceController from "../controllers/enhance.controller.js"
import upload from "../middlewares/multer.middleware.js"

const router = express.Router()

router.post("/enhance", upload.single("image"), enhanceController.enhance)

export default router