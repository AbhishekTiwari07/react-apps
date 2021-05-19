import express from 'express';
import auth from '../middleware/auth.js'
import User from '../model/user.js'

const router = express.Router()

const admin = {
    email : "root",
    password : "1234"
}

router.post('/register', auth, async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send({
            "message" : "Successfully Saved"
        })
    }
    catch(e){
        res.send(e)
    }
})

router.get('/all',auth, async (req,res)=>{
    try{
        const user = await User.find()
        res.send(user)
    }
    catch{

    }
})


export default router;