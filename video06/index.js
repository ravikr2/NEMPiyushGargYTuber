
const fs=require("fs")

console.log("1")

//Non-Blocking -- means iska respone aane me time lagega tab tak process aage badhao 
//                jab response aayega tab de denge.
fs.readFile("./file.txt","utf-8",(err,res)=>{
    if(err) throw err
    else console.log(res)
    console.log("2")
})

console.log("3")

// Blocking-- means jab tak iska respone nahi aayega tab tak process aage nahi padhega
//            jab response aayega tab iske saath hi process aage badhega.
const res=fs.readFileSync("./file.txt","utf-8")
console.log(res)
console.log("4")