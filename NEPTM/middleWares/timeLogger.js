
const timeLogger=(req,res,next)=>{
    const startTime=new Date().getTime()
    next()
    const endTime=new Date().getTime()
    console.log(endTime-startTime)
}

module.exports={
    timeLogger
}