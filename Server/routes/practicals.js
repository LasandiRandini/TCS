import express from "express"
import { practical, getpractical} from "../controllers/practical.js"

const router = express.Router()

router.post("/practical", practical)

router.get("/getpractical", getpractical)

export default router