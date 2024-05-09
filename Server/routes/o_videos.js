import express from "express"
import {addReciept,showReciept} from "../controllers/o_video.js"


const router = express.Router()

router.post("/addReciept", addReciept)
router.get("/ShowReciept" , showReciept)


export default router;