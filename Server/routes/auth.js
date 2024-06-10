import express from "express"
import { register,login, profile,deleteStudent ,displayUsers,getStatusByNic,getAlYears,updateStudentStatus,getAllStudents,updateActiveness} from "../controllers/auth.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

router.get("/profile",verifyToken, profile)
router.delete("/deleteStudent/:id", deleteStudent)
router.get("/displayUsers",displayUsers)
router.get('/getStatusByNic/:snic_no', getStatusByNic);
router.get("/getAlYears",getAlYears);
router.put('/updateActiveness/:id', updateActiveness);
router.get('/getAllStudents', getAllStudents);
router.put('/updateStudentStatus/:nic_no', updateStudentStatus);
export default router