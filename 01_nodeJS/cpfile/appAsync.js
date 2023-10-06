const fs = require("fs");

let dataReaded =fs.readFileSync("source.txt", "utf8");
console.log(dataReaded);
let dataUpper = dataReaded.toUpperCase();
fs.writeFileSync("destination.txt", dataUpper ,"utf8" );
