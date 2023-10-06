const User = require('./module/User')
const express = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const session = require('express-session')
const userRouter = require("./router/userRouter")
const uri ="mongodb://localhost:27017/Forum";


let app =express();

app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

(async()=>{
await mongoose.connect(uri);
console.log("Connected ... !")
})()



app.use('/users' , userRouter);


app.get('/', (req , res)=>{
    res.render('index')
})

app.get('/login', (req , res)=>{
    res.render('login')
})

app.get('/register', (req , res)=>{
    res.render('register')
})


app.post('/register', async (req, res) => {
    try {
        const hasedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser ={
            name : req.body.name,
            email : req.body.email,
            password:hasedPassword
        }
        await User.create(newUser);
    res.redirect('/login');
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




app.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user || !user.password) {
        res.send({ success: false, message: 'User not found or password not set' });
        return;
      }
  
      console.log('Request Password:', req.body.password);
      console.log('User Password:', user.password);
  
      const passwordMatch = await bcrypt.compare(req.body.password, user.password, 10);
  
      if (passwordMatch) {
        req.session.user = user;
        res.redirect('/');
      } else {
        res.send({ success: false, message: 'Password is wrong' });
      }
    } catch (e) {
      console.error(e);
      res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
  });
  


app.listen(3000 ,( )=>{
    console.log(' listenng in the port : 30000')
})