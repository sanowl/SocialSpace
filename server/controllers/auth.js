import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";



export const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        }=req.body;

        const salt = await bcrypt.genSalt();
        const PasswordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password : PasswordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile:Math.floor(Math.random() * 1000),
            impressions:Math.floor(Math.random() * 1000)
    
        });
        const savedUser = await newUser.save();
        // when the user is created it right the stauts code would be 201 and it will send data as json file
        res.status(201).json(savedUser);
    }catch(err){
        // if thiers an erro  the front end will get the error message and the status code 500 which means is not working        
        res.status(500).json({error:err.message});

    }

}
/* logiin in*/
export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user) return res.status(400).json({error:"User not found"});
        // if the user is not found it will send the error message and the status code 400 which means is not working

        const isMatch = await bcrypt.compare(password,user.password);
        // if the password is match it will send the token and the status code 200 which means is working 
        
        // if the password is not match it will send the error message and the status code 400 which means is not working

        if(!isMatch) return res.status(400).json({error:"Incorrect password"});
        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token,user}); 

    

    }catch(err){
        res.status(500).json({error:err.message});
    }
}


