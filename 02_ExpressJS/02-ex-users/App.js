const express= require("express");
const fs = require('fs');
let users = require("./user.json");


const app = express();


app.use(express.json());

app.get("/", (req , res)=>{
    res.send(users);
})

app.get("/user", (req , res)=>{
    res.json({'message': 'user list ', "users":users });
})


app.get("/user/:id", (req,res)=>{
    let a = users.find(item=> item.id == req.params.id);
    if(a)res.send({ success : true , data :a});
    else res.status(404).send({ success : false , message :"Not Found"})
})

app.post("/new",(req ,res)=>{
    if(users.find(item=>item.id == req.body.id)) res.status(404).send(({success : false , message :"this user already existed!"}))
   else{
    users.push(req.body);
fs.writeFile("user.json", JSON.stringify(users,null , 2), (err)=>{
    if(err) res.status(500).send({success:false , message :""})
    else res.send({success : true , data:req.body})
})
    // res.send(req.body);
   }
})


app.delete("/de/:id",(req ,res)=>{

    if(!users.find(item=>item.id == req.params.id)) res.status(404).send(({success : false , message :"Not exist!"}))
   else{
   users =users.filter(item=>item.id != req.params.id);
    users.push(req.body);
fs.writeFile("user.json", JSON.stringify(users), (err)=>{
    if(err) res.status(500).send({success:false , message :"Error !"})
    else res.send({success : true , message: "done!"})

})
    // res.send(req.body);
   }
})

app.get('/edit/:id',(req , res)=>{
    if(!users.find(item=>item.id == req.params.id)) res.status(404).send(({success : false , message :"Not exist!"}))
    else{
let user = users.find(e => e.id == req.params.id)
// user.id= req.params.id;
// user.name =req.params.name;
console.log(user.scor+ " ; "+ user.name);
user.age=18;
user.name= "Bihi"
res.send({success : true , data:user})

}
})



app.listen(3000 , ()=>{
console.log("hello");
})