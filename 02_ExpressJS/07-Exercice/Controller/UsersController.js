let users = require('../data/users.json');
const fs = require('fs');

function getUsers(req , res){
    res.send({success: true , data:users});
}

function getOneUser(req , res){
let user = users.find(e => e.id == req.params.id)
if(!user) res.status(404).send({success:false , message:"this user doesn't exist !"});
    res.send({success: true , data:user});
}

function addUser(req , res){
let leg = users.length;
    const newUser={
        id : leg+1,
        name : req.body.name,
        email : req.body.email,
        password :req.body.password,
    }
users.push(newUser);

fs.writeFile('./data/users.json' , JSON.stringify(users , null , 2) , (err)=>{
 if(err)  res.status(404).send('Error!')
 res.status(200).send( {success:true , message:"has been added successflly" })
})
}

function editUser(req , res){
      let user = users.find(e => e.id == req.params.id)
      if(!user){
        res.status(404).send({success:false , message:"this user not exist yet !"});
      }
    const newUser={
            id : Number(req.params.id),
            name : req.body.name,
            email : req.body.email,
            password :req.body.password,
        }
        users = users.filter(e => e.id != req.params.id)
        users.push(newUser);
    fs.writeFile('./data/users.json' , JSON.stringify(users , null , 2) , (err)=>{
     if(err)  res.status(404).send('Error!')
     res.status(200).send( {success:true , message:"has been added successflly" })
    })
    }


 function delateUser(req , res){
    let user = users.find(e => e.id == req.params.id)
    if(!user){
      res.status(404).send({success:false , message:"this user not exist yet !"});
    }
    else{
    users = users.filter(e => e.id != req.params.id)
    fs.writeFile('./data/users.json' , JSON.stringify(users , null , 2) , (err)=>{
        if(err)  res.status(404).send('Error!')
        res.status(200).send(  {success:true , message:"has been added successflly" } )
       })
    }
 }




module.exports = {
    getUsers ,
    getOneUser, 
    addUser,
    editUser,
    delateUser
}