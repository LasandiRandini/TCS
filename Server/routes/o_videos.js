import express from "express";
import { fileURLToPath } from 'url';
import multer from "multer";
import path from "path";
import { showReceipt, addReceipt,approveReceipt,getApprovedUnits, getVideosByUnitId,enrollInUnit,checkEnrollment,checkReceiptStatus,rejectReceipt,getIncomeData,getReceiptData } from "../controllers/o_video.js";
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


router.get("/showReceipt", showReceipt); 
router.post("/addReceipt", addReceipt);
router.put("/approveReceipt/:receipt_id", approveReceipt);
router.get("/getApprovedUnits/:userId", getApprovedUnits);
router.get("/getVideosByUnitId/:unitId", getVideosByUnitId);
router.put("/enrollInUnit", enrollInUnit);
router.post('/checkEnrollment', checkEnrollment);
router.post('/checkReceiptStatus', checkReceiptStatus);
router.put('/rejectReceipt/:receipt_id', rejectReceipt);
router.get('/getIncomeData', getIncomeData);
router.get('/getReceiptData', getReceiptData);


app.use('/public', express.static(path.join(__dirname, 'public')));

export default router;
