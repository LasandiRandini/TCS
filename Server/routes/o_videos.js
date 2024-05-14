// router.js

import express from "express";
import { fileURLToPath } from 'url';
import multer from "multer";
const app = express(); 
import path from "path";
import { showReceipt, addReceipt } from "../controllers/o_video.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/reciepts");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addReceipt", upload.single("file"), addReceipt); 
router.get("/showReceipt", showReceipt); 

app.use(express.static(path.join(__dirname, 'public')));
export default router;
