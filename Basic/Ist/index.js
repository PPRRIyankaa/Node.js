const fs = require("fs");

// It will create new file if not present and add data and it overrides the data
// fs.writeFileSync("Write.txt","This is first file");
// fs.writeFileSync("Write.txt","This is Priyanka Verma")

// fs.appendFileSync('Write.txt',"It will add the data")


// Node js include additional datatype called buffer (not include in browser file)
// Buffer is mainly used to store the binary types 
// while reading from the file or recieving packets over the internet 
// const buff_data = fs.readFileSync("Write.txt");
// console.log(buff_data)

// const original_data = buff_data.toString();
// console.log(original_data)

// // to rename the file 
// fs.renameSync("Write.txt","ReadWrite.txt");


// const data = fs.readFileSync("ReadWrite.txt","utf8")

// fs.mkdirSync("FileSystem") // create new folder
// fs.unlinkSync("ReadWrite.txt") //delete file

// fs.rmdirSync("FileSystem")



// callbacks makes our program asynchronous 
// when we are using async func then we have to use callbacks function 
// fs.writeFile("read.txt","HelloWorld",(error)=>{
//     console.log("Callbacks is must in asynchronous ")
// }
// )

// fs.appendFile("read.txt","HelloWorld1",(error)=>{
//     console.log("Callbacks is must in asynchronous ")
// });

// fs.readFile("read.txt","HelloWorld1","utf-8",(error,data)=>{
//     if (err) throw err;
//     console.log(data)
// });

// fs.writeFile("osmodule.js","",(error)=>{
//     console.log("os");
// })

fs.writeFile("path.js","",(error)=>{
    console.log("os");
})