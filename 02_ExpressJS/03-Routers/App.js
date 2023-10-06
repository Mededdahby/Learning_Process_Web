const express=require("express")
const userRouter=require("./Router/userRouter")
const articlRouter=require("./Router/articlRouter")

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home");
})

app.use("/users", userRouter )
app.use("/articls",articlRouter)


app.listen(3000  ,()=>{
    console.log(' server listening at : http://localhost:3000/')
})