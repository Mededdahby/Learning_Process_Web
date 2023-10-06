const express=require("express");
const session=require("express-session")
let articles=require("./db/articles.json")

const app=express();

app.use(session({
    secret:"Un secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.urlencoded({extended:true}))

app.set("view engine","pug")
app.set("views","./views")

app.use((req,res,next)=>{
    console.log(req.session)
    req.data={
        selected: req.params.id, 
        user:{},
        articles:articles
    };
    if(req.session.user) req.data.user=req.session.user
    next();
})

app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.render("index", req.data);
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",(req,res)=>{
    console.log(req.body.email)
    if(req.body.email && req.body.passwd)
        req.session.user={email:req.body.email}
    res.redirect("/");
})

app.get("/logout",(req,res)=>{
    req.session.user={}
    res.redirect("/")
});

app.listen(3000)