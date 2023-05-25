const fs = require("fs");

// //reading a file
// let fileContent = fs.readFileSync("f1.txt");

// console.log("data in file 1-->" + fileContent);

// //write inside file

// fs.writeFileSync("f3.txt", "Iam groot");

// // append data

// fs.appendFileSync("f2.txt", "Iam marvel fan");

// delete file

// fs.unlinkSync("f3.txt");

// DIRECTORIES

//create a directory
fs.mkdirSync("mydir");

//check content inside of directory
let folderPath =
  "C:\\Users\\Pooja Sivakumar\\Documents\\Mern\\node-basics\\mydir";
console.log(fs.readdirSync(folderPath)); //[ 'f1.txt', 'f2.txt' ]

//check if dir exists
console.log(fs.existsSync("mydir"));

console.log(fs.existsSync("demo.js"));

fs.rmdirSync("mydir");
