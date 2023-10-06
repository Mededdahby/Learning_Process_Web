const fs = require('fs');
const http = require('http');
const querys = require("querystring");
const url = require("url")
const host ="localhost";
const port =3000;

const server = http.createServer((req, res) => {
res.setHeader("content-type", "application/json");
const q = querys.parse(url.parse(req.url).query)
res.end(JSON.stringify(q));


});

server.listen(3000 , ()=>{

})
