const fs = require("fs");

// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("after reading file then output");

const data = fs.readFile("read.txt","utf-8",(error,data)=>{
    console.log(data);
})
console.log("after reading file then output");