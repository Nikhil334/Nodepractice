const fs = require("fs");

fs.writeFile("asyncread.txt","welcome to the new file for async read write",(error)=>{
    console.log("writing done sucessfully");
    console.log(error);
});

fs.appendFile("asyncread.txt"," ,Please tell me about yourself somthing.",(error)=>{
    console.log("task completed");
})

// fs.readFile("asyncread.txt","utf-8",(error,data)=>{
//     console.log(data);
// })

// fs.rename("asyncread.txt","asynccurd.txt",(error)=>{
//     console.log("renamed successfully");
// });

// fs.unlink("asynccurd.txt",(error)=>{
//     console.log("success fully removed");
// })