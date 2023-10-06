const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
let path = req.url;
    switch(path){
      case '/' : path ='index.html'; break;
      case '/index.html' : path='index.html'; break;
      case '/style.css' : path='style.css'; break;
      default :path='notFound.html';
    }

        fs.readFile(path, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end();
            }
            else {
        console.log(req.url);
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        });
});
exports.server = server;
