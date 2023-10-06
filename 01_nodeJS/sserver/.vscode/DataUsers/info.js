const http = require('http');
const fs = require('fs');
const url = "http://localhost:3000/";

 const info = ` 
 <head>
 <link rel="stylesheet" href="style.css" type="text/css">
 <title>Node.js Web App</title>
 </head>
<body>
<h1>Users List</h1>
<table>
<tr>
  <th>ID</th>
  <th>Name</th>
  <th>Age</th>
  <th>Address</th>
</tr>`;

const server = http.createServer((req, res) => {
  let path = req.url;
  switch(path){
    case '/':path='data.json';  break;
    case '/data' : path = 'data.json';break;
    case '/style.css' :path='style.css';break;
    default : path="Error.html";
  }
  let html;
 
    fs.readFile(path,  (err, data) => {
       if (err) {
      
         res.writeHead(500);
     res.end('Error');
   } else if(path =="data.json") {
    res.setHeader("content-type", "text/html");
     html =` 
     <head>
     <link rel="stylesheet" href="style.css" type="text/css">
     <title>Node.js APP</title>
     </head>
    <body>
    <h1>Users List</h1>
    <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>`;
         let dataJson = JSON.parse(data);
         dataJson.map((user , i)=>{
          html+=
      `<tr>
       <td>${user.id}</td>
       <td>${user.name}</td>
       <td>${user.age}</td>
       <td>${user.address}</td>
     </tr>`
         })
        res.writeHead(200);
        res.write(html)
        res.end("");
        html+=`</table`;
       }else{
        res.writeHead(200);
        res.write(data)
        res.end("");
       }
      
     });

});

server.listen(3000, () => {
  console.log(`Server is running on ${url}`);
});
