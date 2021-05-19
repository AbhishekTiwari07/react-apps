import express from 'express';
import login from './routes/login.js';
import info from './routes/userinfo.js';
import cookieParse from 'cookie-parser'
import cors from 'cors'
import './db/mongoose.js'

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParse())
app.use(cors())

app.use('/login',login);
app.use('/info',info);

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(3003,(err)=>{
    console.log('Server at 3003')
})
