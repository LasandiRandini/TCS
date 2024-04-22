import express from "express"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import AauthRoutes from "./routes/Aauth.js"
import checkingRoutes from "./routes/checkings.js"
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
app.use(cors());

app.use(express.json())
app.use(cookieParser())
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/Aauth", AauthRoutes)
app.use("/api/checkings", checkingRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})
