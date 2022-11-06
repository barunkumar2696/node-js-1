const http=require("http")
const url=require("url")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
res.end("hello from node server")
console.log(req.url)
}
else if(req.url=="/createApi"){
    fs.readFile(`./createApi.json`,"utf-8",(err,data)=>{
        res.end(data)
    })
    
}
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listning to port 8000")
})