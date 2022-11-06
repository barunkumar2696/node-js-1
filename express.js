var express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello From Expressjs")
})

app.get("/About",(req,res)=>{
    res.send("Hello From  about Expressjs")
})

app.listen(8000,()=>{
    console.log("Listening the port")
})

//with res.json ,we can send json data through express js.Here we need to pass inside res.json()