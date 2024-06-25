// before in write file when i was writting data again and again
// it was over write the data so how can We add new data with older data??
// okay so we can do that with appendFile 


const fs=require("fs")

// 01
// fs.appendFileSync("./contactSync.txt","ravi Appending data ")

// now data is appending but you can see in contactSync file data
//is coming in same line so what can i do for write data in new line??
// okay so for i can use \n 

//
// fs.appendFileSync("./contactSync.txt","hey Ravi you are good at coding\n")

//or 02
fs.appendFile("./contact.txt","\nAppending data using append file",(err,res)=>{
    try {
        console.log(res)
    } catch (err) {
        console.log(res)
    }
})