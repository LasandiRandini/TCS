import express from "express"
import {addAlYear,getAlYears,updateAlYear,deleteAlYear,addInstitute,getInstitutes,updateInstitute,deleteInstitute} from "../controllers/setting.js"



const router = express.Router()


router.post('/addAlYear', addAlYear);
router.get('/alYears', getAlYears);
router.put('/updateAlYear/:old_al_year', updateAlYear);
router.delete('/deletelInstitiute/:al_year', deleteAlYear);
router.post('/addInstitute', addInstitute);
router.get('/institutes', getInstitutes);
router.put('/updateInstitute/:old_institute', updateInstitute);
router.delete('/deleteInstitute/:institute', deleteInstitute);
export default router