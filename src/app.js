import express from "express"
import servicesRouter from "./routes/services.router.js"


const app = express()

app.use(express.json())

app.use("/api/services", servicesRouter)

export default app