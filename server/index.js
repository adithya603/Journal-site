import  express  from "express";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/authentication.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, function(){
    console.log("Server has started")
})