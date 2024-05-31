import express from "express";
import { fileURLToPath } from 'url';
import multer from "multer";
import path from "path";
import { showReceipt, addReceipt } from "../controllers/o_video.js";
import { __dirname } from '../dirname.js';


const app = express(); 
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

// router.post("/addReceipt", upload.single("file"), addReceipt); 
router.get("/showReceipt", showReceipt); 
router.post("/addReceipt", addReceipt);

app.use('/public', express.static(path.join(__dirname, 'public')));

export default router;
