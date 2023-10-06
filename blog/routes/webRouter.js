const router = require('express').Router();
const{ getRoutes, getPosts, getPostsById, addPost, editPost , deletePost, login}  = require('../controllers/apiController')



router.get('/', getRoutes)
router.get('/posts', getPosts)
router.post('/posts', addPost)
router.put('/posts', editPost)
router.post('/login', login)
router.delete('/posts/:id', deletePost)
router.get('/post/:id', getPostsById)



module.exports= router;