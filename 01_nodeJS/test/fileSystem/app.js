const http = require('http');
const fs = require('fs');


const server = http.createServer((req , res)=>{
let dataX;
    fs.readFile('data.txt' ,'utf8',  (err,data)=>{
    if (err) throw err
    res.write(data);
        console.log(data)
    dataX = data; 

        res.end();
})

dataX +=" and hello text";
fs.writeFile('data.txt' , dataX, (err)=>{
if(err) console.log("error!")
res.write("done!");
res.end();
})
})


server.listen(3000 , ()=>{
    console.log('listning on the port 3000');
})