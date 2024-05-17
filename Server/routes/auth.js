import express from "express"
import { register,login, logout,profile,deleteStudent ,displayUsers} from "../controllers/auth.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/profile", profile)
router.delete("/deleteStudent/:id", deleteStudent)
router.get("/displayUsers",displayUsers)

export default router