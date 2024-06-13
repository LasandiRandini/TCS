import express from "express"
import { createQuiz,addQuestion,getAllQuizzes,submitResponse,getQuiz,getQuizResults,getQuizzes,getQuizResult,getUserQuizSummaries,getQuizResultsPDF} from "../controllers/quiz.js"



const router = express.Router()

router.post("/createQuiz", createQuiz)
router.post('/addQuestion', addQuestion);
router.get('/getAllQuizzes', getAllQuizzes);
router.get('/getQuiz/:q_id', getQuiz);
router.post('/submitResponse', submitResponse);
router.get('/getQuizResults/:quizId', getQuizResults);
router.get('/getQuizzes', getQuizzes);
router.get('/getQuizResult', getQuizResult);
router.get('/getUserQuizSummaries', getUserQuizSummaries);
router.get('/getQuizResultsPDF/:quizId', getQuizResultsPDF);
export default router