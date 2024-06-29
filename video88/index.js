const http=require("http")
const fs=require("fs")
const url=require("url")




const myServer=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
        //aisa maine kyo kiya?? kyonki data.txt me fevicon url se bhi reload ki 
        //khabar aa rahi thi.
    }

    // console.log("url",req.url)
    const myUrl=url.parse(req.url,true)
    console.log("Eminem",myUrl)


    const date=new Date()
    const kahaSeData=req.url
    const data=`${(date.getHours())}:${(date.getMinutes())}:${(date.getSeconds())} Par ${kahaSeData} se Request aaya\n`
        fs.appendFile("./data.txt",data,(err,res)=>{
            if(err){
                console.log("err",err)
            }else{
                console.log("res",res)
            }
        })

    switch(myUrl.pathname){
        case "/": res.end("Video 08 Home Page Hai Bhai")
        return;
        case "/about" :
        const name=myUrl.query.name
        const userID=myUrl.query.userId
        res.end(`Hii ${name},Welcome to about page and <p> your userID is ${userID}</p>`)
        return ;
        default : res.end("404 Not Found Bhai")
        return
    }
})


myServer.listen(3500,()=>{
    console.log("server Started")
})