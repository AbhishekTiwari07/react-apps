import express from 'express';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth.js'

const router = express.Router()

const admin = {
    email : "root@root.com",
    password : "1234"
}

router.post('/', async (req, res) => {
    try {
        if(req.body.email == admin.email && req.body.password == admin.password){
            const token = jwt.sign( {
                email : req.body.email
            }, 'Lkasarkar' , {expiresIn: 60*3});
    
            res.cookie('jwt',token, { httpOnly: true, maxAge: 300000 })
    
            return res.send({
               message : "LoggedIn"
            })
        }
        else
            res.send({
                message : "Details Mismatched"
            })
    } catch (error) {
        res.status(400).send() 
    }
})

router.get('/a', auth , async (req,res)=>{
    try{
        res.send("Hello bolo")
    }
    catch(e){
        console.log(e)
    }
})

export default router