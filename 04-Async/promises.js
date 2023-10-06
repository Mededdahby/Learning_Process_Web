const fs = require('fs').promises;
const axios = require('axios')

axios('https://jsonplaceholder.typicode.com/todos')
.then((d)=>{
    return fs.writeFile("todos.json" , JSON.stringify(d.data , null , 2))
}).then(()=>{
    return axios('https://jsonplaceholder.typicode.com/todos')
}).then((d)=>{
console.log(d.satatus)
}).
catch(e=>console.log("error"))