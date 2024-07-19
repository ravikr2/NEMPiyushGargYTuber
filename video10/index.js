const http=require("http")
const fs=require("fs")
const url=require("url")  //no need to require this. Because express will do that.
const express=require("express");
const app=express()
console.log(app)

app.get("/",(req,res)=>{
    res.end("This Home Page With Express")
})

app.get("/signup",(req,res)=>{
    
    res.end("This is signUp Page")
})




const myServer=http.createServer(app)


myServer.listen(3500,()=>{
    console.log("server Started")
})