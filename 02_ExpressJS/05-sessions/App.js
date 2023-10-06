const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
    secret : 'un secret',
    resave:false,
    saveUninitialized: true,
    cookie :{maxAge : 60000}
}))
app.use(express.json());



app.post('/login', (req , res )=>{
    if(req.body.user !=="" && req.body.password !=="")
   {  req.session.user = req.body.user;
    res.send( "login done !" )}
    else{
        res.status(404).send("Not authotectated!")
    }
})

app.get('/profile' , (req ,res)=>{
    if(req.session.user) res.send("welcome back MR: "+req.session.user +" !")
    else res.status(404).send("Not authotectated!")
})



app.listen(3000 , ()=>{
    console.log('listening on : 3000');
})