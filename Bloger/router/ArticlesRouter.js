const router=require("express").Router()
const { getArticles ,getMyArticles, addArticle , editArticle, editArticleGet ,getDeleteArticle,deleteArticle} = require('../controller/ArticleController')

router.get('/' , getArticles);
router.get('/myarticles', getMyArticles);
router.post('/add' , addArticle);
router.get('/edit/:id', editArticleGet)
router.post('/edit/:id', editArticle)
router.get('/delete/:id', getDeleteArticle)
router.post('/delete/:id', deleteArticle);


module.exports = router;