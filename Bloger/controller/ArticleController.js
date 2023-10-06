const articles = require('../model/Articles.json');
const fs = require('fs');

let userID ;

function getArticles(req , res){
    const lastArticles = articles.slice(-10)
    res.render('../view/Articles/articles' , {articles});
}




function getMyArticles(req ,res){
   userID = req.session.user.id;
let myArticles = articles.filter(e=> e.authorID == userID);
res.render('../view/Articles/myArticles', {myArticles})
};

function addArticle(req , res){
const { title, text } = req.body; 
userID = req.session.user.id;
    const newArtcile={
        id : articles.length + 1,
        authorID : userID,
        title : title,
        text :text
    }
articles.push(newArtcile);
fs.writeFile('./model/Articles.json' , JSON.stringify(articles , null , 2) , (err)=>{
 if(err)  res.status(404).send('Error!')
 else{
   const userID = req.session.user.id;
let myArticles = articles.filter(e=> e.authorID == userID);
res.render('../view/Articles/myArticles', {myArticles})
 }
})
}
function editArticleGet(req ,res){
    let myArticles = articles.find(e=> e.id == req.params.id);
res.render('../view/Articles/editArticle', {myArticles})
}

function editArticle(req, res) {
const articleId = parseInt(req.params.id); 
const { title, text } = req.body;

const articleIndex = articles.findIndex(article => article.id === articleId);

if (articleIndex !== -1) {
    articles[articleIndex].title = title;
    articles[articleIndex].text = text;
    fs.writeFile('./model/Articles.json', JSON.stringify(articles, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error while saving the article.');
        } else {
            const userID = req.session.user.id;
            let myArticles = articles.filter(e=> e.authorID == userID);
            res.render('../view/Articles/myArticles', {myArticles})
            // res.redirect('./article/myArticles', {myArticles} )
        }
    });
} else {
    res.status(404).send('Article not found.');
}
}

function getDeleteArticle(req ,res){
    let myArticles = articles.find(e=> e.id == req.params.id);
res.render('../view/Articles/delete', {myArticles})
}

function deleteArticle(req, res) {
    const articleId = parseInt(req.params.id);
    const articleIndex = articles.findIndex(article => article.id === articleId);
  
    if (articleIndex !== -1) {
      // Article found, now delete it
      articles.splice(articleIndex, 1);
  
      fs.writeFile('./model/Articles.json', JSON.stringify(articles, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error while deleting the article.');
        } else {
          res.redirect('/article/myArticles');
        }
      });
    } else {
      res.status(404).send('Article not found.');
    }
  }
  




module.exports = {
    getArticles ,
    getMyArticles,
    addArticle,
    editArticle,
    editArticleGet,
    getDeleteArticle,
    deleteArticle
}