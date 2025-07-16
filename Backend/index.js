// import mongoose, { connection } from "mongoose"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import connectdb from "./config/db.js"
// import mongdatamodel  from "./models/detailModels"
import detailRouter from "./Routes/detailsRoutes.js"
 await connectdb()

 connectdb()
const corsOptions={
    origin:"http://localhost:5173"
}

const app=express()
app.use(cors(corsOptions))
const port=4000









app.use(express.json())

app.use("/api/form",detailRouter)






app.listen(port,()=>{
      console.log(`Server port is ${port}`)
})