const fs=require("fs")

const logger=(req,res,next)=>{
         fs.appendFile("./logger.txt",`Route:${req.url} Method:${req.method}\n`,"utf-8",(err,res)=>{
            try{
                console.log(res)
            }catch{
                console.log(err)
            }
         })
         next()
}

module.exports={
    logger
}