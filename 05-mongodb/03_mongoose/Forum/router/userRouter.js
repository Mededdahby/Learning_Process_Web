
const router= require('express').Router();

const {getOneUser, getUsers} = require('../controller/userController')

const User=require("../module/User");

router.get('/test', getUsers)


router.get('/register',  async (req , res)=>{
    res.render('../views/register')
} )


router.post('/register', async (req , res)=>{
    User.insertOne(req.body);
} )

router.get('/:email', getOneUser);


module.exports = router;