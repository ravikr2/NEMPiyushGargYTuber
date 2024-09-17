const express=require("express")
const app=express()
const data=require("./MOCK_DATA.json")
const PORT=3500;
const fs=require("fs")

app.use(express.urlencoded({extended:false}))
// understanding how middleware works.🤘
app.use((req,res,next)=>{
      console.log("NO 01")
      if(req.url=="/api/users"){
        console.log("NO 02")
        next()
        console.log("NO 03")
      }
        console.log("NO 04")
        next()
        console.log("NO 05")
    })
app.use((req,res,next)=>{
        console.log("N0 06")
        next()
        console.log("NO 07")
        console.log(req.params,"id") 
    })

app.get("/api/users",(req,res)=>{
    console.log("NO 08")
   const users=`
   <ul>
   ${data.map((el)=>`<li>${el.first_name}</li>`).join("")}
   </ul>
   `
    return res.send(users)
})
// get one element by id
app.get("/api/users/:id",(req,res)=>{
    const id=req.params.id
    console.log(req.params,"params")
    const element=data.find((el)=>el.id==id)
    return res.json(element)
})



app.post("/api/users",(req,res)=>{
    const ele=req.body
    data.push({...ele,id:data.length+1})
    fs.writeFile("./MOCK_DATA.json",(JSON.stringify(data)),(req,res)=>{
        return res.json({status:"DataApended"})
    })
    console.log("element",ele)
    console.log(res.status)
    return res.json({status:"success"})
    

})



app.listen(PORT,()=>{
    console.log("Server running")
})