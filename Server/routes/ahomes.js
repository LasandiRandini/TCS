import express from "express"
import {getStudentCounts,getReceiptPaymentCount,getInstituteStudentCounts,getQuizAverages } from "../controllers/ahome.js"

const router = express.Router()

router.get("/getStudentCounts", getStudentCounts)
router.get("/receiptPayments", getReceiptPaymentCount)
router.get("/getInstituteStudentCounts", getInstituteStudentCounts)
router.get("/getQuizAverages", getQuizAverages)

export default router