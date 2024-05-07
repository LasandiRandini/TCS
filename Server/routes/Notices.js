import express from "express"
import { addNotice} from "../controllers/notice.js"

const router = express.Router()

router.post("/addNotice", addNotice)


export default router