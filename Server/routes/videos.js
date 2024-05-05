import express from "express"
import {addUnit,addVideo, getUnit} from "../controllers/video.js"


const router = express.Router()

router.post("/addUnit", addUnit)
router.get("/getUnit" , getUnit)
router.post("/addVideo", addVideo)

export default router