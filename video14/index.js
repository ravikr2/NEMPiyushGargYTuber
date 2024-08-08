const express=require("express")
const app=express()
const users=require("./MOCK_DATA.json")
const PORT=3500;
const fs=require("fs")


app.use(express.urlencoded({extended:false}))


app.get("/api/users/:id",(req,res)=>{
      const id=+(req.params.id)
      const data=users.find((el)=>(el.id==id))
      return res.json(data)  // yaha pe res.send and res.json me different hai//
})
app.get("/api/users",(req,res)=>{
    const data=`
    <ul>
    ${users.map((el)=>`<li>${el.first_name}</li>`).join(" ")}
    </ul>
    `
    return res.send(data)   // yaha pe res.send and res.json me different hai//
})

app.post("/api/users",(req,res)=>{
    const body=req.body
    console.log("body",body)
    users.push({...body,id:users.length+1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length})
    })
})


app.listen(PORT,()=>{
    console.log("Sever started for the postman")
})