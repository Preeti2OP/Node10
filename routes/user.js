const express=require("express");
const usercontroller=require("../controller/usercontroller")
const router=express.Router();
router.use(express.json());
router.get('/users',(req,res)=>{
    usercontroller.getUsers(req,res)
    
})
router.get('/users:/id',(req,res)=>{
    usercontroller.getParticularUsers(req,res);
})
router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res);
})
module.exports=router;