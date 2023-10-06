
const express = require('express')
const {direBonjour , auth } = require('./mdlwars')
const bodyParser = require('body-parser')
const app = express();

 app.use(direBonjour);
app.use(auth)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post('/user', (req , res)=>{
    res.send(req.body)
})

app.get ('/user' , auth , (req , res)=>{
    res.send(`bonjour ${req.user.name}`)
})

app.get('/', (req , res)=>{
    res.send('Home ')
})

app.listen(3000);