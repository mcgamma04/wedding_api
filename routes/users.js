import express from 'express';
import userModel from '../models/user.js';
const UserRouter = express.Router();
const getTableNumber = async ()=>{
    for (let i =1;i<=45;i++) {
        const count = await userModel.count({seat:i})
        if(count<10){
            return i
        }
    }
    return null
}
UserRouter.post('/',async (req,res)=>{
   try {
    let data = req.body;
    if(data.name==null||data.phoneNumber==null||data.attend==null){
        return res.send({message: 'failed',reason:'fields are empty'});
    }
   const seat = await getTableNumber()
   if (seat==null) {
    return res.send({message: 'failed', reason: 'maximum number of invitees complete'});
   }
    const userData = {...data,seat}
    const user =await userModel.create(userData)
    return res.send({message: 'success',user})
   } catch (e) {
    throw e
   }

})

export default UserRouter