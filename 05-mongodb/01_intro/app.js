const MongoClient =require('mongodb').MongoClient
const uri = "mongodb://localhost:27017"

const client =new MongoClient(uri)

let db;
( async ()=>{
    try{
    await client.connect();
    console.log('connected')
    db = client.db('todos')
    let todos = db.collection('todos');
console.log( todos.find( {}).toArray());
    }catch(e){
    console.log(e);
    }


})();