console.log("object")
const fs=require("fs")
//fs.writeFileSync('read.txt',"welcome")
//fs.appendFileSync("read.txt","afssffsf")
//const buf=fs.readFileSync('read.txt')
//console.log(buf)
//org=buf.toString()
//console.log(org)
//fs.renameSync("read.txt","readwrite.txt")
//const data=fs.readFileSync("./nodejs/readwrite.txt","utf8")
//console.log(data)
//fs.unlink(path of file) for deletion
//fs.rmdir("nodejs")



//CRUD operation using Asynchronous method.
//fs.mkdir('barun',(err)=>{
    //console.log('Folder Created')
//})

//similarly we need to pass callback in async. operation for read,update and delete with fs.writeFile,fs.readFile and fs.unLink
//fs.readFile('./readwrite.txt','utf-8',(err,data)=>{
   // console.log(data)
//})




//OS Module:
//var os=require('os')
//console.log(os.arch())
//console.log(os.freemem())
//similarly there are many os method to perform different operations



//PATH Module:
//const path=require('path')
//console.log(path.dirname())
//there are many path method in path module to perform diffe



//EXPORT IMPORT In node js
const add=require('./index2')
console.log(add(5,5))



//const chalk=require("chalk")
//console.log(chalk.blue('hello world'))