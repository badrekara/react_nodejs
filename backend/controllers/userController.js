let User=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv = require ('dotenv')
dotenv.config({path: '../config/config.env'})

exports.register=async (req,res)=>{
    const email=await User.findOne({email:req.body.email})
    if(email) return res.status(400).send('Email exists!')
    //-------------------------Hashage-----------------
    const salt=await bcrypt.genSalt(5)
    const pwdHash=await bcrypt.hash(req.body.password,salt)
    //---------------------------------------------
    const user=new User({
        name:req.body.name,
        email: req.body.email,
        password:pwdHash
    })
    try{
       await user.save()
       res.status(200).json({
        "success":"user saved successfully",
        "user":user
       })
    }catch(err){
        console.error(err)
    }
}

exports.login=async (req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('User not found!')
    //--------------------------------------------------------
    const verif=await bcrypt.compare(req.body.password,user.password)
    if(!verif) return res.status(400).send('passw incorr!')
    //--------------------------------------------------------
    const token=jwt.sign({
    _id:user._id},process.env.SECRET_TOKEN,{expiresIn:'3600s'})
    res.header('auth-token',token).send(token)
}
//--------------------------------------------
exports.test=async (req,res)=>{
    res.status(200).json({
        "success":"acces autorise"
    })
}