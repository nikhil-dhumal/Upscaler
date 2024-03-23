import express from "express"
import enhanceController from "../controllers/enhance.controller"
import upload from "../middlewares/multer.middleware"

const router = express.Router()

router.post("/enhance", upload.single("images"), enhanceController.enhance)

export default router