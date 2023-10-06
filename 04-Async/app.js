const fs = require("fs");
const request=require("request")

request("https://jsonplaceholder.typicode.com/users",(err,res,body)=>{
    if(err){
        console.log(err);
        return;
    }
    if(res.statusCode!==200){
        console.log(res.statusCode);
        return;
    }
    try{
        let todos = JSON.parse(body) ;
        let Data = todos.map(todo => Object.values(todo).join(','));
        let info= Data.join('\n');
        fs.writeFileSync('users.csv' , info , (err)=>{
        if(err) console.log("done");
        })
        
//         body =JSON.parse(body)
// let str=""
// body.forEach(e => {
//     for(k in e){
// let line =" ";
//         line+= e[k]+",";
//     line = line.substring(0 ,line.length-1)+ "\n";
// str+=line;
//     }
// });
// fs.writeFileSync('data.csv' , str , (err)=>{
//     console.log("done");
//     })
    }catch(e){
        console.log("Parsing Json ERROR")
    }
})
// let todos = JSON.parse(body) ;
//let str=""
// body.forEach(e => {
//     for(k in e){
// let line =" ";
//         line+= e[k]+",";
//     line = line.substring(0 ,line.length-1)+ "\n";
// str+=line;
//     }
// });