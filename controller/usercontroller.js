const users=require("../users.json")
function getAllUsers(req,res){
    res.json(users);
}
function getParticularUsers(req,res){
    let id=parseInt(req.params.id);
    let user=user.find((user)=>user.id==id);
    res.json(user)
}
function addUser(req,res){
    console.log(req.body)
    res.end("add in progress....")
}
module.exports={
    getAllUsers,
    getParticularUsers,
    addUser
}