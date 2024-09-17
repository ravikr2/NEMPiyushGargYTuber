const watchMan=(req,res,next)=>{
    if(req.url=="/students"){
        next()
    }else{
        console.log("Baye Baye")
        return res.json("Baye Baye")
    }
}


module.exports={
    watchMan
}