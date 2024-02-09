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
router.post("/login",async(req,res)=>{
    let emailid = req.body.emailId
    let result = await userModel.findOne({"emailId":emailid})
    if (!result) {
        return res.json({
            status:"invalid emailid"
        })
    }
    else{
        let dbPassword = result.password
    let inputPassword = req.body.password
    console.log(dbPassword)
    console.log(inputPassword)

    const match = await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json(
            {
                status:"invalid password"
            }
        )
    }
    else{
    res.json(
        {
            status:"success"
        }
    )
    }
    }

})



module.exports=router