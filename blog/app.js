const express = require('express')
const mongoose = require('mongoose');
const session = require('express-session')
const Post = require('./models/post')



const postRouter = require('./routes/apiRouter')
const post2Router = require('./routes/webRouter')


const uri ="mongodb://localhost:27017/Posts";

let app =express();
// app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use(session({
    secret:"Un secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))

// app.use(bodyParser.json());
app.use(express.static('./public'));
app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

(async()=>{
await mongoose.connect(uri);
console.log("Connected ... !")
})()


app.use('/api', postRouter);
app.use('/api', postRouter);

app.get('/', async (req , res)=>{
    let posts = await Post.find({});
    res.render('index', posts)
}
)

app.listen(3000 ,( )=>{
    console.log(' listenng in the port : 3000')
})