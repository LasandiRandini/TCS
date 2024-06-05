import express from "express"
import {getAllVideoUnits,getVideosByUnitId,deleteVideo,updateVideo} from "../controllers/updatevideo.js"



const router = express.Router()

// router.delete("/deleteVideo/:unit_id", deleteVideo)
// router.put("/updateVideo/:id",updateVideo)

router.get('/getAllVideoUnits', getAllVideoUnits);
router.get('/getVideosByUnitId/:unitId', getVideosByUnitId);
router.delete('/deleteVideo/:video_id', deleteVideo);
router.put('/updateVideo/:video_id', updateVideo);

export default router