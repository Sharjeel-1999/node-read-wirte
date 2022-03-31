// console.log("Hello World");


const fs=require("fs");

// fs.writeFile("read.txt","today is good",(err)=>{
//     console.log("File is here");
//     // console.log(err)
// })


// fs.appendFile("read.txt","today is not  good",(err)=>{
//     console.log("Task");
//     // console.log(err)
// })


fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
    console.log(err);
})