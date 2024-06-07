import express from "express"
import {getStudentCounts,getReceiptPaymentCount } from "../controllers/ahome.js"

const router = express.Router()

router.get("/getStudentCounts", getStudentCounts)
router.get("/receiptPayments", getReceiptPaymentCount)


export default router