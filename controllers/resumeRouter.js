const express = require("express")
const resumeModel = require("../models/resumeModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let resumeModelObj = new resumeModel(data)
    let result = await resumeModelObj.save()
    res.json({status:"success"})
})

router.post("/viewresume",async(req,res)=>{
    let data=req.body
    let result = await resumeModel.find(data)
    res.json(result)
})

module.exports=router