const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Student-Api")
.then(()=>{
    console.log("Connection is successful");
}).catch(()=>{
    console.log("No connection");
});