import express from "express"
import {addUnit,addVideo, getUnit,updateUnit,displayUnits} from "../controllers/video.js"


const router = express.Router()

router.post("/addUnit", addUnit)
router.get("/getUnit" , getUnit)
router.post("/addVideo", addVideo)
router.get("/displayUnits",displayUnits)
router.put("/updateUnit/:unit_id",updateUnit)


export default router