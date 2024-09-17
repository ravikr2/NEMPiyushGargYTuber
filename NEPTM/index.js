const express=require("express")
const app=express()
const PORT=2100;
// const {timeLogger}=require("./middleWares/timeLogger")
// const {watchMan}=require("./middleWares/watchMan")
const {logger}=require("./middleWares/logger")
const {roll}=require("./middleWares/roll")

const {studentsRouter}=require("./router/students")
const {teachersRouter}=require("./router/teachers")

// app.use(watchMan)
// app.use(timeLogger)
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use(logger)
// app.use(roll)


app.get("/",(req,res)=>{
    console.log("Home Page")
    return res.json("Home page")
})
app.use("/",studentsRouter)
app.use("/",teachersRouter)





app.listen(PORT,()=>{
    console.log("Server Started")
})

