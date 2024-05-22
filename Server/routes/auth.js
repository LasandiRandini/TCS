import express from "express"
import { register,login, logout,profile,deleteStudent ,displayUsers} from "../controllers/auth.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/profile",verifyToken, profile)
router.delete("/deleteStudent/:id", deleteStudent)
router.get("/displayUsers",displayUsers)

export default router