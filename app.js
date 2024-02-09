const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const signUp = require("./controllers/signUp")
const resume = require("./controllers/resumeRouter")

const app =express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://jobydb:joby123@cluster0.czhpkmp.mongodb.net/resumeDB?retryWrites=true&w=majority")

app.use("/api/user",signUp)
app.use("/api/resume",resume)

app.listen("3001",()=>{
    console.log("server running")
})