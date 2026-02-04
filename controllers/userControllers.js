const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User  = require("../models/userModel");
//@desc Register  a user 
//@route POST all /api/user/register
//@access public

const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error(" All feild are madator!")
    }
   const userAvailable= await User.findOne({email});
   if(userAvailable){
    res.status(400);
    throw new Error("User already ")
   }
  //Hash password
   const hashedPassword = await bcrypt.hash(password,10);
   console.log("Hashed Password: ",hashedPassword);
  const user = await User.create({
    username,
    email,
    password:hashedPassword,
  })
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email:user.email});

    }
    else{
         res.status(400);
    throw new Error("User data is not valid")
    }
        res.json({message:"Register the user"});

});


//@desc Login  a user 
//@route POST all /api/user/login
//@access public

const LoginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password)
    {
         res.status(400);
        throw new Error(" All feild are madator!")
    }
    const user = await User.findOne({email});
    if(user&&(await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            }, 
        },process.env.ACCESS_TOKEN_SECERT,
        {expiresIn:"15m"}
    );
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("Email or password is invalid");
    }
    // res.json({message:"Login the user"});
});


//@desc  Current user 
//@route GET all /api/user/login
//@access private

const CurrentUser = asyncHandler(async (req,res)=>{
    res.json(req.user);
});




module.exports = {registerUser,LoginUser,CurrentUser};