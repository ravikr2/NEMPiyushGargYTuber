const http=require("http")
const fs=require("fs")

const myServer=http.createServer((req,res)=>{
    console.log("url",req.url)
    const date=new Date()
    const kahaSeData=req.url
    const data=`${(date.getHours())}:${(date.getMinutes())}:${(date.getSeconds())} Par ${kahaSeData} se Data aaya\n`
     fs.appendFile("./data.txt",data,(err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log(res)
        }
     })
    switch(req.url){
        case "/": res.end("Home Page Hai Bhai")
        return
        case "/about" :res.end("About Page Hai Bhai")
        return 
        default : res.end("404 Not Found Bhai")
        return
    }
})


myServer.listen(3500,()=>{
    console.log("server Started")
})