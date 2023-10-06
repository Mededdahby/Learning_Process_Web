const fs = require("fs").promises;

const axios = require('axios');

(async function(){
    try{
    let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    let info = await fs.writeFile('data.json' , JSON.stringify(res.data , null , 2))}
    catch(err){
console.log("err")
    }
})()


console.log("fin !!!!")