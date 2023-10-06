const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json())
const TOKEN_SERCET = "un secrit";


app.post('/login', (req , res )=>{
    const token = jwt.sign({
    user: req.body.user,
    score : req.body.score},
    TOKEN_SERCET,
    {expiresIn:'24h'}
    );
    res.json(token);
})

app.get('/profile' , (req , res )=>{
    const token = req.header("a");
    jwt.verify(token , TOKEN_SERCET , (err  , data)=>{
        if(err) res.status(401).send("not Authorization")
        res.send(data)
    })
})




app.listen(3000 , ()=>{
    console.log('listening on : 3000');
})
