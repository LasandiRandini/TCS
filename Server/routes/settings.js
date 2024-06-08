import express from "express"
import {addAlYear,getAlYears,updateAlYear,deleteAlYear} from "../controllers/setting.js"



const router = express.Router()


router.post('/addAlYear', addAlYear);
router.get('/alYears', getAlYears);
router.put('/updateAlYear/:old_al_year', updateAlYear);
router.delete('/deleteAlYear/:al_year', deleteAlYear);

export default router