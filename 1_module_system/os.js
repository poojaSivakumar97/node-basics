const os = require("os");

console.log(os.arch()); //x64
console.log(os.platform()); //win32
console.log(os.networkInterfaces());

console.log(os.cpus());

console.log(os.totalmem()); //7879061504

console.log(os.freemem()); //1223884800
