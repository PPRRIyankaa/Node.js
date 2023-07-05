const mongoose = require("mongoose")
const validator = require("validator")

const  studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Errow("Invalid Error");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }
})

const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;
