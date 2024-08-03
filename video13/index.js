const express=require("express")
const app=express()
const users=require("./MOCK_DATA .json")

const PORT=8500;

app.get("/users",(req,res)=>{
        const data=
        `<ul>
        ${users.map((el)=>`<li>${el.first_name}</li>`).join("")}
        </ul>`;
        res.send(data)
    })
app
.route("/api/users/:id")

.get((req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((el)=>el.id===id)
    return res.json(user)
})
.patch((req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((el)=>el.id===id)
    const finished=res.json(user.status="pending")
    console.log(finished)
    return finished
})

app.listen(PORT,()=>{
    console.log("server started brohh")
})