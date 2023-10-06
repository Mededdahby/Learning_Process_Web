
const Users = require("../Public/JSON/user.json");
const fs = require("fs")
const {deleteUserArticles} = require('../Controller/user_artcleController');

function getUsers(req,res){
    res.send({success : true , data : Users})
}

function getUser(req,res){
    let user = Users.find(e => e.id  == req.params.id);
    if(user) res.send({success : true , data: user})
    else res.send({success : false , message: "user"})
}


function addUser(req, res) {
  const newUser = {
    id: req.body.id, 
    name:req.body.name,
    age: req.body.age,
    score: req.body.scor,
  };
  Users.push(newUser);
  fs.writeFile('user.json', JSON.stringify(Users, null, 2), 'utf-8', (err) => {
    if (err) {
      console.log('Error writing to user.json file: ', err);
       res.status(500).json({ success: false, error: 'Internal server error' });
    }
    res.status(201).json(newUser);
  });
}

function deleteUser(req ,res){

    if(!Users.find(item=>item.id == req.params.id)) 
    res.status(404).send(({success : false , message :"Not exist!"}))
   else{
  let users =Users.filter(item=>item.id != req.params.id);
    // users.push(req.body);
fs.writeFile("user.json", JSON.stringify(users, null, 2), (err)=>{
    if(err) res.status(500).send({success:false , message :"Error !"})

    deleteUserArticles(req , res );
    res.send({success : true , message: "done!"})

})
   }
}

function updateUser(req , res){
const userID = req.params.id;
console.log(userID)

const userUptetd ={
  id : Number(userID),
  name : req.body.name,
  age : req.body.age,
  scor : req.body.scor
}


const userIndex = Users.findIndex(item => item.id === userUptetd.id)
console.log(userIndex)
if(userIndex === -1) res.status(404).send({success : false , massage : "user not found"})

Users[userIndex] = userUptetd;
Users.push(req.body);
Users.splice(userIndex, 1);
fs.writeFile('user.json', JSON.stringify(Users , null ,2) , (err)=>{
  if(err) res.status(404).send({success : false , massage: " error server !"})
  else{
    res.status(200).send({success : true , message:"done!"})
}
})



}



module.exports={
    getUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}