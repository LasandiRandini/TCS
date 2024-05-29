import express from "express"
import {  getAllEvents} from "../controllers/event.js"

const router = express.Router()

router.get("/ getAllEvents",  getAllEvents)


export default router
