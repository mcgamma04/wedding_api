import { Schema } from "mongoose";

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
    }
})

