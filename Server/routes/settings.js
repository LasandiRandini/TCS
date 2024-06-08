import express from "express"
import {addAlYear} from "../controllers/setting.js"



const router = express.Router()



router.post('/addAlYear', addAlYear);

export default router