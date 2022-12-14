import mongoose from "mongoose";
const  {Schema,model} = mongoose

const schema = new Schema({
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    attend:{
        type:String,
        required:true,
    },
    spouse:{
        type:String,
    },
    seat:{
        type:Number,
    },
    date_created:{
        type:Date,
        default:()=>Date.now(),
    }
})

const userModel = model('users',schema)
export default userModel;