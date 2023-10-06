const router=require("express").Router()
const { getArticles , getOneArticle , addArtcile , editArtcile, delateArticle} = require('../Controller/ArticlesController')

router.get('/' , getArticles);
router.get('/:id' , getOneArticle);
router.post('/add' , addArtcile);
router.put('/edit/:id', editArtcile)
router.delete('/delete/:id', delateArticle)


module.exports = router;