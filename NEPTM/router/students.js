const express=require("express")

const studentsRouter=express.Router()


studentsRouter.get("/students",(req,res)=>{
    console.log("Students Page")
    return res.json("Students page")  
})
studentsRouter.post("/studentsDetails",(req,res)=>{
    console.log(req.body,"req.body")
    return res.json("successfully updated")
})

module.exports={
    studentsRouter
}