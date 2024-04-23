import express from "express"
import {getpractical, practical} from "../controllers/practical.js"

const router = express.Router()

router.post("/practical", practical)
router.post("/getpractical", getpractical)

export default router