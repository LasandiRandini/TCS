import express from "express"
import { practical, getpractical,displayPractical,deletePractical,getTimeSlots,voteForTimeSlot,addTimeSlots,getCount} from "../controllers/practical.js"

const router = express.Router()

router.post("/practical", practical)
router.get("/getpractical", getpractical)
router.get("/displayPractical",displayPractical)
router.delete("/deletePractical/:practical_id",deletePractical)
router.post("/addTimeSlots",addTimeSlots)
router.get('/getTimeSlots/:practical_id', getTimeSlots);
router.post('/vote', voteForTimeSlot);
router.get('/getCount', getCount);

export default router