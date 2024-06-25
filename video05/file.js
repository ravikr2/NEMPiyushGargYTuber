//what i have to do? 
// I want to create file and write something on file using code

const fs=require("fs")

// fs.writeFileSync("./contact.txt","Hey Ravi Your Mob async")

// fs.writeFile("./contactSync.txt","Hey Ravi Your Mob Sync",()=>{})


// Now I am able to write something on file now
// How to read whats written in the file??
//Okay so there is two method to read file 1 is synchronous and asynchronous.

const ccontantSync=fs.readFileSync("./contactSync.txt","utf8")
// console.log(ccontantSync)

// 01.
fs.readFile("./contact.txt","utf8",(err,res)=>{
     if (err) throw err
     else console.log(res)
})

//  or 02.
 fs.readFile("./contact.txt","utf-8",(err,res)=>{
    try {
        console.log(res)
    } catch (error) {
        console.log(err)
    }
 })

 //or 03.
 fs.readFile("./contact.txt","utf-8",(err,res)=>{
    if(res){
        console.log(res)
    }
    else{
        console.log(err)
    }
 })