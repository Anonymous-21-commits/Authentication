const userService=require('../services/userService');
const service=new userService();
const createUser=async (req,res)=>{
    try{
        const user=await service.createUser({
            mail:req.body.mail,
            password:req.body.password,
            username:req.body.username
        });
        return res.status(200).json({
            success:true,
            response:user
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            err:err
        })
    }
}
const signIn=async (req,res)=>{
    try{
        const token=await service.signIn(req.body.mail,req.body.password);
        return res.status(200).json({
            success:true,
            token:token
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            err:{err}
        })
    }
}
const isAuthenticated=async (req,res)=>{
    try{
        const user=await service.isAuthenticated(req.headers['x-access-token']);

        return res.status(200).json({
            success:true,
            response:user
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            err:{err:'token invalid'},
        })
    }
}
module.exports={
    createUser,
    signIn,
    isAuthenticated
};