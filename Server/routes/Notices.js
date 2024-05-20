import express from "express";
import { addNotice, getNotice,showNotices,deleteNotice } from "../controllers/notice.js";
import multer from "multer";
import path from "path";
import { __dirname } from '../dirname.js';


const app = express(); 
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
router.get("/showNotices", showNotices);
router.delete("/deleteNotice/:n_id", deleteNotice);

app.use('/public', express.static(path.join(__dirname, 'public')));
export default router;
