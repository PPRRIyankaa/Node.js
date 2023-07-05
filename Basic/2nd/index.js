// var chalk = require("chalk");
// var validator = require('validator');

// const res = validator.isEmail('priyankavermrsa1051gmail.com'); //=> true
// console.log(res)
// console.log(chalk.blue.underline.inverse("H World"));


// console.log(__filename);
// console.log(__dirname);


// Node js warp everything inside the rumming operator (Anonymous funtion)
// ( function(exports,require,module,_filename,_dirname){   it is similar to IIFE in advance javascript and it is automatically invoked everything inside it is having privat scope 

// })
// exports,require,module are having the local scope in the file
// In node js every file is called module and it variables and functions are called private scopes. 



// Node.js <WebServer
// To acces webpages of any application , you need a web Servern.The webserver will handle all the https request for the web application

// eg:IIS is a web server for ASP.NET web application and apache is a webserver for php or java web applications.ASP

// Node.js provide cap. to create your own web server which will handle app http request asynchronously. you can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.


// var http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("Hello Guys!!")

//     if(req.url == "/") res.end("Home");
//     else if(req.url == "/about") res.end("About");
//     else if(req.url == "/contact"){ 
//         res.write("conatct");
//         res.writeHead(202);
//         res.end();
//     }
//     else if(req.url == "/package"){ 
//         fs.readFile(`${__dirname}/package.json`,"utf-8",(error,data)=>{
//             if (err) throw err;
//             console.log(data);
//         })
//         res.end("Data from user api");
//     }
//     else {
//         res.writeHead(202,{"Content-type":"text/html"});
//         res.end("page does not exist");

//     }
// });
// server.listen((8000),()=>{
//     console.log("portno: 8000")
// });


// const fs = require('fs');
// // JSON stands for Javascript object notation. Json is a lighweight format for storing and transporting data.
// // JSON is often used when data is sent from the server to a web page

// const data = {
//     name:"Priyanka",
//     rollno: "12014017",
//     branch:"Eletrical"
// }
// const jsondata = JSON.stringify(data);  //convert object to json-object
// console.log(jsondata);


// const objdata = JSON.parse(jsondata);  //convert json-object to object
// console.log(objdata)

// fs.writeFile("jsonfile.json",jsondata,(error)=>{
//     console.log("done")
// });

// fs.readFile("jsonfile.json","utf-8",(error,data)=>{
//     const orgdata = JSON.parse(data);
//     console.log(orgdata);
// })

// const objdata = JSON.parse(jsondata);                                                   //error
// fs.appendFile("jsonfile.json",objdata,(error)=>{
//     console.log("added object");
// });



// API (Service which allows to request the data)



// Events Module 
// Node.js has a built-in module, called <Events
// where you can create, fire- and listen for your own Events

// Example-1   Registering for the events to be fired only one time using once .Events
// Example-2    Create an events emitter instance and registering a couple of callbacks 
// Example-3    Registering for the event with callback parameter 

// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("SayMyName",()=>{
//     console.log("Listening the event")
// })
// event.on("SayMyName",()=>{
//     console.log("Listening the Priyanka")
// })
// event.on("SayMyName",()=>{
//     console.log("Listening the event")
// })
// event.emit("SayMy Name");       // Creating the event
// event.on("checkpage",(sc,msg)=>{
//     console.log(`The status code is ${sc} and the page is ${msg}`);
// })
// event.emit("checkpage",200,ok);  //check status code
// we can call multiple callbacks using one event 
// Emitter object emit named events that cause previously registered event to be CANCELLED. So, an emitter object basically has two main features:
// Emitting name events
// registering and unregistering listeners function



// Node.js Streams 
const server1 = http.createServer();
server1.on("request",(req,res)=>{
    // var fs = require('fs');
    // fs.readFile("input.txt",(err,data)=>{
    //     res.end(data.toString());
    // });

    // 2nd way 
    // const stream = fs.createReadStream("input.txt");
    // stream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    //  // it will read data in continous manner
    //  stream.on('end',()=>{
    //     res.end();
    // });
    // stream.error('error',(error)=>{
    //     console.log(error)
    //     res.end("File not found")
    // })


    // 3rd way 
    const stream = fs.createReadStream("input.txt");   //we can read the data from this file and write in .pipe file and it fast and efficient and reading and writng spped is matching 
    stream.pipe(res);
})
server1.listen((8000),()=>{
    console.log("portno: 8000")
});