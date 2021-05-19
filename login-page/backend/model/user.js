import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = mongoose.Schema({
    username : {
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type: String,
        required: true,
        validate(value){
            if((!validator.isMobilePhone(value)) && value.length==10)
                throw new Error("Invalid Mobile number")
        }

    },
    email:{
        type:String,
        unique:true,
        required: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Invalid Email")
        }
    },
    address:{
        type:String,
        required:true
    }
})

const user = mongoose.model('user',userSchema)

export default user;