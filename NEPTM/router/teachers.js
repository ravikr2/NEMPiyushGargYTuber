const express=require("express")
const teachersRouter=express.Router()


teachersRouter.get("/teachers",(req,res)=>{
    console.log("Teachers Page")
    return res.json("Teachers page")   
})
teachersRouter.post("/teachersDetails",(req,res)=>{
    console.log(req.body,"req.body")
    return res.json("successfully updated")
})

module.exports={
    teachersRouter
}