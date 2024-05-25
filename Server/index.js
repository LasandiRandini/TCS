import express from "express"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import AauthRoutes from "./routes/Aauth.js"
import checkingRoutes from "./routes/checkings.js"
import practicalRoutes from "./routes/practicals.js"
import videoRoutes from "./routes/videos.js"
import noticeRouter from "./routes/Notices.js";
import o_videoRouter from "./routes/o_videos.js";
import quizRouter from "./routes/quizes.js"
import questionRouter from "./routes/questions.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import { __dirname } from "./dirname.js"
import path from "path";


const app = express();
app.use(cors());

app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'));



app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/Aauth", AauthRoutes)
app.use("/api/checkings", checkingRoutes)
app.use("/api/practicals", practicalRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/Notices", noticeRouter);
app.use("/api/o_videos",o_videoRouter)
app.use("/api/quizes", quizRouter)
app.use("/api/questions", questionRouter)

app.use('/public/reciepts', express.static(path.join(__dirname, 'public/reciepts')));
app.use('/public/image', express.static(path.join(__dirname, 'public/image')));

app.listen(8800, () => {
    console.log("Connected!")
})
