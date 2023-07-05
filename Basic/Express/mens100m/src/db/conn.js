const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Opympics").then(()=>{
    console.log("Connection Succesfull");
}).catch((e)=>{
    console.log("Connection unsuccessful")
})
