const express= require("express");
const app = express();

app.get("/", (req , res)=>{
    res.send("Home");
})

app.get("/user", (req , res)=>{
    res.send("User List");
})

app.use((err,req , res)=>{
req.status(404).send("page not found");
})

app.listen(3000 , ()=>{
console.log("hello");
})