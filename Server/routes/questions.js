import express from "express"
import {displayQuizzes,updateQuiz,deleteQuiz,getQuiz} from "../controllers/question.js"

const router = express.Router()

router.get("/displayQuizzes",displayQuizzes)
router.put("/updateQuiz/:q_id",updateQuiz)
router.delete("/deleteQuiz/:q_id",deleteQuiz)
router.get("/getQuiz/:q_id",getQuiz)

export default router