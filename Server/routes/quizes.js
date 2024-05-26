import express from "express"
import { createQuiz,addQuestion,getAllQuizzes,submitResponse,getQuiz} from "../controllers/quiz.js"



const router = express.Router()

router.post("/createQuiz", createQuiz)
router.post('/addQuestion', addQuestion);
router.get('/getAllQuizzes', getAllQuizzes);
router.get('/getQuiz/:q_id', getQuiz);
router.post('/submitResponse', submitResponse);

export default router