import express from "express"
import { addQuestion,getQuestions} from "../controllers/question.js"

const router = express.Router()

router.post("/addQuestion", addQuestion)
router.get("/getQuestions",getQuestions)


export default router