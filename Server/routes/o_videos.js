import express from "express";
const app = express(); 
import {  showReciept,addReciept } from "../controllers/o_video.js";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/reciepts");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addReciept", upload.single("file"), addReciept);

router.get("/showReciept", showReciept);

export default router;




