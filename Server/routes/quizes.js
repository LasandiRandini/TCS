import express from "express"
import { createQuiz,addQuestion,submitResponse,getQuiz} from "../controllers/quiz.js"

const router = express.Router()

router.post("/createQuiz", createQuiz)
router.post('/addQuestion', addQuestion);
router.get('/getQuiz/:quizId', getQuiz);
router.post('/submitResponse', submitResponse);


export default router