import jwt from 'jsonwebtoken';
import cookieParse from 'cookie-parser'

const admin = {
    email : "root@root.com",
    password : "1234"
}

const auth = (req,res,next)=>{
    try{
        const token = req.cookies.jwt
        const decoded = jwt.verify(token,'Lkasarkar')
        // console.log(decoded)
        var match = (decoded.email == admin.email)

        if(!match){
            throw new Error("No email found")
        }

        req.user = decoded
        next()
    }
    catch(e){
        return res.send({error : "Authentication failed "})
    }   
}

export default auth