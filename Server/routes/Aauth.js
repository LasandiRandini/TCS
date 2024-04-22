import express from "express"
import { aregister,alogin } from "../controllers/Aauth.js"

const router = express.Router()

router.post("/aregister", aregister)
router.post("/alogin", alogin)

export default router