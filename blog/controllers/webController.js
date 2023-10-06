const Post = require('../models/post')
const { ObjectId } = require('mongoose').Types;






async function  getPosts (req, res)  {
try {
    let posts = await Post.find({});
    res.reder('index',posts )
} catch (error) {
    console.log('can not get posts JSON')
}
}

async function  getPostsById (req, res) {
    try {
        let post = await Post.findOne({ _id: new ObjectId(req.params.id) });
        console.log(post)
        res.reder('index',post )
    } catch (error) {
        console.log('can not get post 1 JSON')
    }
}



async function addPost(req, res){
    try {
        await Post.create(req.body)
        res.reder('index',post )
    } catch (error) {
        
    }
}




async function editPost(req, res) {
    try {
        await Post.updateOne({ _id: new ObjectId(req.body.id) }, { $set: req.body });
        res.reder('index',post )
    } catch (error) {
        console.error('Error editing post:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}



async function deletePost(req, res) {
    try {
        await Post.deleteOne({ _id: ObjectId(req.params.id) }); 
        res.reder('index',post );
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}


 async function login (req, res){
    const { user, password } = req.body;
    if (user === 'admin' && password === '123') {
    const token = 'monJWT'; 
    res.json({ token });
    } else {
    res.status(401).json({ message: 'Authentification échouée' });
    }
  };

  module.exports= {
    getRoutes,
   getPosts,
   getPostsById,
   addPost,
   editPost,
   deletePost,
   login
  }