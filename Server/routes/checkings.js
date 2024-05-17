import express from "express"
import { checking, addStudent, addNics} from "../controllers/checking.js"

const router = express.Router()

router.post("/checking", checking)
router.post("/addStudent", addStudent)
router.post("/addNics", addNics)

export default router;