const bioData={
name:"Barun",
age:26,
channel:"discovery",
};


//convert to JSON.
const jsonData=JSON.stringify(bioData)

//Dusre file m json ko add krna.
const fs=require("fs")
fs.writeFile("json1.json",jsonData,(err)=>{
console.log("Done")
})

//read json file.
fs.readFile("json1.json","utf-8",(err,data)=>{
//console.log(data)
const orgData=JSON.parse(data)
console.log(orgData)
})