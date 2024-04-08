import express from "express"
import { checking} from "../controllers/checking.js"

const router = express.Router()

router.post("/checking", checking)

export default router