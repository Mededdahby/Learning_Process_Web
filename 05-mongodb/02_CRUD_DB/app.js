const express = require('express');
const { ObjectId } = require('mongodb');
const MongoClient =require('mongodb').MongoClient
const uri = "mongodb://localhost:27017"

const app = express();
app.use(express.json());
const client =new MongoClient(uri)

let db;
( async ()=>{
    try{
    await client.connect();
    console.log('connected')
    db = client.db('users')
    }catch(e){
    console.log("errors");
    }
})();


app.get('/',(req ,res)=>{
    res.send("hello")
})

app.get('/users' ,async(req ,res)=>{
let user = db.collection('data');
let users = await user.find({}).toArray();
res.send(users)
})

app.get('/add/id/:name' ,async(req ,res)=>{
    let user = db.collection('data');
    let users = await user.find({_id : new ObjectId(req.params.id)});
    res.send(users)
    })
    
    app.put('/add' , (req, res)=>{
        let us = db.collection('data');
        us.insertOne(req.body);
        res.send(req.body);
    })

    app.put('/update/:name' , (req, res)=>{
        let us = db.collection('data');
        us.updateOne({name : req.params.name},{$set:{name :req.body.name}})
        us.insertOne(req.body);
        res.send(req.body);
    })

    app.delete('/delete/:name', (req, res)=>{
        let us = db.collection('data');
        us.deleteOne({name:req.params.name});
        res.send({success:true , message:"done!"}) 
    })


app.listen(3000 , ()=>{
    console.log('connected ...!')
})