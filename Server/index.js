import express from "express"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import AauthRoutes from "./routes/Aauth.js"
import checkingRoutes from "./routes/checkings.js"
import practicalRoutes from "./routes/practicals.js"
import videoRoutes from "./routes/videos.js"
import noticeRouter from "./routes/Notices.js";
import o_videoRouter from "./routes/o_videos.js";
import cors from "cors";
import cookieParser from "cookie-parser";



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
app.use("/api/o_video",o_videoRouter)



app.listen(8800, () => {
    console.log("Connected!")
})
