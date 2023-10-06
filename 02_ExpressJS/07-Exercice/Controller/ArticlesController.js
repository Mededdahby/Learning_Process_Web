let articles = require('../data/articles.json');
const fs = require('fs');

function getArticles(req , res){
    res.send({success: true , data:articles});
}

function getOneArticle(req , res){
let article = articles.find(e => e.id == req.params.id)
if(!article) res.status(404).send({success:false , message:"this article not exist yet !"});
    res.send({success: true , data:article});
}

function addArtcile(req , res){
let leg = articles.length;
    const newArtcile={
        id : leg+1,
        userID : req.body.userID,
        title : req.body.title,
        text :req.body.text,
    }
articles.push(newArtcile);

fs.writeFile('./data/articles.json' , JSON.stringify(articles , null , 2) , (err)=>{
 if(err)  res.status(404).send('Error!')
 res.status(200).send( {success:true , message:"has been added successflly" })
})
}

function editArtcile(req , res){
      let article = articles.find(e => addArtcile.id == req.params.id)
      if(!article){
        res.status(404).send({success:false , message:"this article not exist yet !"});
      }
    const newArtcile={
            id : Number(req.params.id),
            userID : req.body.userID,
            title : req.body.title,
            text :req.body.text,
        }
        articles = articles.filter(e => e.id != req.params.id)
        articles.push(newArtcile);
    fs.writeFile('./data/articles.json' , JSON.stringify(articles , null , 2) , (err)=>{
     if(err)  res.status(404).send('Error!')
     res.status(200).send( {success:true , message:"has been added successflly" })
    })
    }


 function delateArticle(req , res){
    let article = articles.find(e => addArtcile.id == req.params.id)
    if(!article){
      res.status(404).send({success:false , message:"this article not exist yet !"});
    }
    else{
    articles = articles.filter(e => e.id != req.params.id)
    fs.writeFile('./data/articles.json' , JSON.stringify(articles , null , 2) , (err)=>{
        if(err)  res.status(404).send('Error!')
        res.status(200).send(  {success:true , message:"has been added successflly" } )
       })
    }
 }




module.exports = {
    getArticles ,
    getOneArticle, 
    addArtcile,
    editArtcile,
    delateArticle
}