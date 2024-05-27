import express from "express"
import {displayQuizzes,updateQuiz,deleteQuiz} from "../controllers/question.js"

const router = express.Router()

router.get("/displayQuizzes",displayQuizzes)
router.put("/updateQuiz/:q_id",updateQuiz)
router.delete("/deleteQuiz/:q_id",deleteQuiz)


export default router