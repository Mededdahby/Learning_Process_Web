const express = require("express")
const session = require('express-session')
const users = require('./model/users.json')
const articles = require('./model/Articles.json')
const path = require('path');
const articleRouter = require('./router/ArticlesRouter')
const usersRouter = require('./router/usersRouter')

const app = express();
app.use(express.static('./public'));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use(session({
    secret:"Un secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000000 }
}))

app.use(express.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true }));
let lastArticles = articles.slice(-6);
app.use((req , res, next)=>{
    req.data ={
        users:users,
        articles:lastArticles,
        user :{},
        admin:{}
    }
    if(req.session.user) req.data.user=req.session.user
    if(req.session.admin) req.data.admin=req.session.admin

next()
})

    app.use('/article' , articleRouter)
    app.use('/users' , usersRouter)


app.set('view engine' , 'pug')
app.set('views', './view')

app.get('/', (req , res)=>{
    res.render('index', req.data)
})

app.get('/login', (req , res)=>{
    res.render('login')
})


app.post("/login",(req,res)=>{
const userLogin = users.find(e=> e.email == req.body.email && e.password == req.body.password) 
if(!userLogin) {
    res.redirect("/login");
}
else{
    if(userLogin.email=="admin@admin.com" && userLogin.password=="123")
    {
    req.session.admin={name:userLogin.name , id:userLogin.id}
    console.log(req.session.admin)
    res.redirect("/")
    }else{
req.session.user={name:userLogin.name , id:userLogin.id}
res.redirect("/");}
}
})

app.get('/logout', (req , res)=>{
    req.session.user={}
    res.redirect("/")
})


app.listen(3000 , ()=>{
    console.log(("Listening on the port : 3000"))
})