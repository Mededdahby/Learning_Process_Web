const htpp = require("http");
const SayHello = require("./hello")


 const server =htpp.createServer((req , res)=>{
    
// res.writeHead("this is a test")
// console.log(SayHello(req , res));
res.write(SayHello(req , res));
res.end('done')
})


server.listen(3000,()=>{
    console.log("hello here ");
});                                                 