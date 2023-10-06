const articls = require("../Public/JSON/Articls.json");
const fs = require('fs');

function getArticls(req,res){
    res.send({success : true , data:articls});
}

function getArticl(req,res ){
    const articl = articls.find(e => e.id == req.params.id);
    res.send({success:true ,data:articl})
}

function addArticl(req,res){
const newArticl ={
    id : req.body.id,
    name : req.body.name,
    description : req.body.description,
    userID : req.body.userID
}
const articlSame = articls.find(item => item.id == newArticl.id)
if(articlSame) res.status(404).send({success : false , message : "already exit! "})
else{
articls.push(newArticl);

fs.writeFile('./public/JSON/articls.json' , JSON.stringify(articls , null , 2) , (err)=>{
    if(err) res.send('hdh');
    res.send("done !")
})
}
}

function deleteArticl(req , res){
const articlExist = articls.find(item => item.id == req.params.id);
if(!articlExist) res.status(404).send({success: false , message : "article doesn't exist !"});

let art = articls.filter(item => item.id != req.params.id);

fs.writeFile('articls.json' , JSON.stringify(art , null ,2) , (err)=>{
    if(err) res.status(404).send({success: false , message : "error"});
    res.status(200).send({success : true , message : "Done !"})
})
}

function updateArticl(req , res){
const articlId = req.params.id;

const newArticl ={
    id : Number(articlId),
    name : req.body.name,
    description : req.body.description,
    userID : req.body.userID
}

const articlIndex = articls.findIndex(item => item.id ===  newArticl.id)
if(articlIndex === -1) res.status(404).send({success: false , message : "article doesn't exist !"});
articls[articlIndex] = newArticl;

fs.writeFile('articls.json' , JSON.stringify(articls , null , 2), (err)=>{
    if(err) res.status(404).send({success: false , message : "error!"});
    res.status(200).send({success: true , message : "done !"});
})

}




module.exports={
    getArticls,
    getArticl,
    addArticl,
    deleteArticl,
    updateArticl
}