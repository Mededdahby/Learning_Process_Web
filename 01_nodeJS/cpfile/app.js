const fs = require("fs");
const source = "source.txt";
const distination = "destination.txt";

fs.readFile(source, "utf-8", (err, data) => { 
    console.log(data); 
    const upper = data.toUpperCase();
    console.log(upper)
    fs.writeFile(distination, upper,"utf-8", (err) => { 
      if(err){
        throw err;
      }
       else{
        console.log("done!")
       } });
    }); 
