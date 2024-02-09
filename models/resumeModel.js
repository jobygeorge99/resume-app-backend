const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema(
    {
        name:{
            required:true,
            type:String
        },
        email:{
            required:true,
            type:String
        },
        address:{
            required:true,
            type:String
        },
        experience:{
            required:true,
            type:String
        },
        skills:{
            required:true,
            type:String
        },
        education:{
            required:true,
            type:{qualification:String,collegeName:String,marks:String}
            
        },
        certificates:{
            required:true,
            type:String
        }
    }
)

module.exports=mongoose.model("resume",resumeSchema)