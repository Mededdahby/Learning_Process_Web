const express = require("express")
const users = require('./DB/users.json')
const articles = require('./DB/Articles.json')
const session = require("express-session")

const app = express();

app.set("view engine", "pug")
app.set("views", "./public/Views")
app.use(express.static("./public"))

app.use(session({
    secret:"secret",
    resave : false,
    saveUninitialized: true,
    cookie:{maxAge: 60000}
}))
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    req.data={
        user:{},
        users:users,
        articles:articles
    };
    if(req.session.user) req.data.user=req.session.user
    next();
})


app.get('/' , (req , res)=>{
    res.render('index',req.data )
})

app.get("/login",(req,res)=>{
    res.render("login");

})

app.post('/login' , (req , res)=>{
    if(req.body.email && req.body.password)
    req.session.user={email:req.body.email}
res.redirect('/')
})

app.get('/article', (req , res)=>{
    res.render('Article', req.data)
})

app.get('/logout' , (req , res)=>{
    req.session.user ={},
    res.redirect('/')
})

app.get('/logout' , (req , res)=>{
    req.session.user ={},
    res.redirect('/')
})
app.listen(3000 , ()=>{
    console.log("listening on the port : 3000")
})