// var express = require('express')

// var app = express();

// // app.get(route, callbacks)
// app.get("/",(req,res)=>{
//     res.write("hello from the express");
//     res.write("<h1>hello from the express</h1>");
//     res.send(); //else it will load
// });
// app.get("/about",(req,res)=>{
//     res.send("hello from the about page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("hello from the contact page");
// });
// app.get("/json",(req,res)=>{
//     // res.send([{
//     //     id:1,
//     //     name:"vinod"
//     // },
//     // {
//     //     id:2,
//     //     name:"priyanka"
//     // }]); //convert it in json format
// //     res.json([{
// //         id:1,
// //         name:"vinod"
// //     },
// //     {
// //         id:2,
// //         name:"priyanka",
// //         branch:null
// //     },
// // "pooo"]);
// res.json("name")
//     // The methods are same when an object or array is passed but res.json() will convert non-object such as null and undefined whaich is not valid json 
// });
// app.listen(8000,()=>{
//     console.log("Listening the port at 8000")
// });

// // The callbacks function has two parameter request(req) ans response(res). The request object represent the http request and has properties foor the request query string, parameter, body, http header 
// // similarly, the response object represent the http response that the express send when it recieves an http request 
// // Through express we can create API
// // there are four methods :
// // get : to get the data or read the data from the server
// // post : create new data
// // put : updata the data
// // delete : dete the data