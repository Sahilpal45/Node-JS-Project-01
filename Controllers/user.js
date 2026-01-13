const User=require("../Models/user.js")

async function handleAllusers(req,res){
    const allusers=await User.find({});
    return res.json(allusers);
}

async function handlegetUserByid(req,res){
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({msg:'User Not found'});
    return res.json(user);
}

async function handleupdateUserByid(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:'Shukla'});
    return res.json({msg:"Success"});
}

async function handledleleteUserByid(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({msg:'Success'});
}

async function handleCreateNewUser(req,res){
    const body=req.body;
    if(!body || !body.first_name || !body.email || !body.gender || !body.last_name || !body.job_title){
        return res.status(400).json({msg:'All fields are req..'})
    }
    const result=await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    });
    return res.status(201).json({msg:'Success',id:result._id});
}

module.exports={
    handleAllusers,
    handlegetUserByid,
    handleupdateUserByid,
    handledleleteUserByid,
    handleCreateNewUser,
}