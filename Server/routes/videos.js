import express from "express"
import {addUnit,addVideo, getUnit,updateUnit,deleteUnit,displayUnits,uploadVideo} from "../controllers/video.js"


const router = express.Router()

router.post("/addUnit", addUnit)
router.get("/getUnit" , getUnit)
router.post("/addVideo", addVideo)
router.get("/displayUnits",displayUnits)
router.put("/updateUnit/:unit_id",updateUnit)
router.delete("/deleteUnit/:unit_id",deleteUnit)
router.get("/uploadVideo",uploadVideo)

export default router