const express=require("express")
const app=express()
const port=8000
const path=require("path")

//built in middleware
const staticPath=path.join(__dirname,"../barun")
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("hellow for express server")
})

app.listen(port,()=>{
    console.log(port)
})