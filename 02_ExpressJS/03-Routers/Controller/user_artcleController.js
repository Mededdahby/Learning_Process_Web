const articles = require("../Public/JSON/Articls.json")
const fs = require('fs');

function deleteUserArticles(req , res){
let article = articles.find(e => e.id == req.params.id);

if(!article) res.status(404).send({success: false , message : "This uwer ID doesn't exist !"})
else{
    articles = articles.filter(e => e.id != req.params.id);
fs.writeFile('./pulic/JSON/user.json' , JSON.stringify(articles , null ,2) , (err)=>{
    if(err) res.status(404).send({success: false , message : "Server error !"})
    res.status(200).send({success: true , message : "This user is deleted !"})
})
}
}

module.exports ={deleteUserArticles}