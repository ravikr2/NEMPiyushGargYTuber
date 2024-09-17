const roll=(req,res,next)=>{
    const roll=Math.random()*100
    req.body.rollNo=roll;
    req.body.school="YouTube"
     
    console.log(roll,"rollNo")
    next()
    console.log(roll,"rollNo2")
}


module.exports={roll}