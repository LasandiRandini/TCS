import express from "express"
import {addUnit,addVideo, getUnit,updateUnit,deleteUnit,displayUnits,uploadVideo,getUnitById,getEnrolledVideos} from "../controllers/video.js"


const router = express.Router()

router.post("/addUnit", addUnit)
router.get("/getUnit" , getUnit)
router.post("/addVideo", addVideo)
router.get("/displayUnits",displayUnits)
router.put("/updateUnit/:unit_id",updateUnit)
router.delete("/deleteUnit/:unit_id",deleteUnit)
router.post("/uploadVideo",uploadVideo)
router.get('/getUnit/:unit_id', getUnitById);
router.get('/getEnrolledVideos/:userId', getEnrolledVideos);

export default router