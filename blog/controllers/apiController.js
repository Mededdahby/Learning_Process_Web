const Post = require('../models/post')
const { ObjectId } = require('mongoose').Types;




function getRoutes (req, res)  {
    const routes = [
      { method: 'GET', path: '/api' },
      { method: 'GET', path: '/api/posts' },
      { method: 'GET', path: '/api/posts/:id' },
      { method: 'POST', path: '/api/posts' },
      { method: 'PUT', path: '/api/posts' },
      { method: 'DELETE', path: '/api/posts/:id' },
      { method: 'POST', path: '/login' },
    ];
    res.json(routes);
};

async function  getPosts (req, res)  {
try {
    let posts = await Post.find({});
    res.send(posts)
} catch (error) {
    console.log('can not get posts JSON')
}
}

async function  getPostsById (req, res) {
    try {
        let post = await Post.findOne({ _id: new ObjectId(req.params.id) });
        console.log(post)
        res.send(post)
    } catch (error) {
        console.log('can not get post 1 JSON')
    }
}



async function addPost(req, res){
    try {
        await Post.create(req.body)
        res.send(req.body)
    } catch (error) {
        
    }
}




async function editPost(req, res) {
    try {
        await Post.updateOne({ _id: new ObjectId(req.body.id) }, { $set: req.body });
        res.json({ success: true, data: req.body });
    } catch (error) {
        console.error('Error editing post:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}



async function deletePost(req, res) {
    try {
        await Post.deleteOne({ _id: ObjectId(req.params.id) }); 
        res.json({ success: true, message: 'Post deleted successfully' });
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