const express = require("express")
const userModel = require("../models/userModel")
const router = express.Router()

router.post("/signup",async(req,res)=>{
    let data = req.body
    let userModelObj=new userModel(data)
    let result = await userModelObj.save()
    res.send("yea")
})

module.exports=router