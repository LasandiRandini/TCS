import express from "express";
import { fileURLToPath } from 'url';
const app = express(); 
import { addNotice, getNotice } from "../controllers/notice.js";
import multer from "multer";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addNotice", upload.single("file"), addNotice);

router.get("/getNotice", getNotice);

app.use(express.static(path.join(__dirname, 'public')));
export default router;
