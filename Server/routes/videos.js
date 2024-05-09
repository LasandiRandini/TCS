import express from "express"
import {addUnit,addVideo, getUnit,displayUnits} from "../controllers/video.js"


const router = express.Router()

router.post("/addUnit", addUnit)
router.get("/getUnit" , getUnit)
router.post("/addVideo", addVideo)
router.get("/displayUnits",displayUnits)

export default router