const os = require("os");

console.log(os.arch());
console.log(`free RAM of the system is ${os.freemem()/(1024*1024*1024)}`);
console.log(os.version());
console.log(os.getPriority());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.machine());
console.log(os.networkInterfaces());;
console.log(os.totalmem/(1024*1024*1024));
console.log(os.userInfo());