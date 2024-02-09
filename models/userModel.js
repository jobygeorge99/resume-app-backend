const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name:{
            required:true,
            type:String
        },
        emailId:{
            required:true,
            type:String
        },
        phone:{
            required:true,
            type:String
        },
        age:{
            required:true,
            type:String
        },
        password:{
            required:true,
            type:String
        }
    }
)

module.exports=mongoose.model("user",userSchema)