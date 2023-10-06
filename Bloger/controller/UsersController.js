let users = require('../model/users.json');
const fs = require('fs');



function getUsers(req , res){
    res.render('../view/Users/users', {users})
}

function addtUserGet(req , res){
    res.render('../view/Users/addUsers')
}

function addUser(req , res){
let leg = users.length;
    const newUser={
        id : Number(leg+1),
        name : req.body.name,
        email : req.body.email,
        password :req.body.password,
    }
users.push(newUser);

fs.writeFile('./data/users.json' , JSON.stringify(users , null , 2) , (err)=>{
 if(err)  res.status(404).send('Error!')

 res.render('../view/Users')
})
}

function getOneUser(req , res){
    let user = users.find(e => e.id == req.params.id)
    res.render("../view/Users/editUsers", {user})
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
    fs.writeFile('./model/users.json' , JSON.stringify(users , null , 2) , (err)=>{
     if(err)  res.status(404).send('Error!')
     res.Red('../view/Users/users', {users})
    })
    }


 function delateUser(req , res){
    let user = users.find(e => e.id == req.params.id)
    if(!user){
      res.status(404).send({success:false , message:"this user not exist yet !"});
    }
    else{
    users = users.filter(e => e.id != req.params.id)
    fs.writeFile('./model/users.json' , JSON.stringify(users , null , 2) , (err)=>{
        if(err)  res.status(404).send('Error!')
        res.render('../view/Users/users', {users})
       })
    }
 }




module.exports = {
    getUsers ,
    getOneUser, 
    addUser,
    editUser,
    delateUser,
    addtUserGet
}