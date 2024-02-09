const express = require("express")
const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const router = express.Router()


hashPasswordGenerator = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    //let data = req.body
    let {data} = {"data":req.body}
    let password = data.password

    hashPasswordGenerator(password).then((hashedPassword)=>{
        data.password=hashedPassword
        console.log(hashedPassword)
        console.log(data)

        let userModelObj=new userModel(data)
        let result = userModelObj.save()
        res.json({
            "status":"success"
        })

    })

})

module.exports=router