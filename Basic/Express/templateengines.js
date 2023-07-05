const express = require('express');
const path = require('path');

const app = express();
// to set view js
// app.set("view engine","hbs");
// app.get("",(req,res)=>{
//     res.render("index",{
//         Name:"priyanka"
//     })
// })

app.get("/",(req,res)=>{
    res.write("Hello Guys");
    res.send();
})

// For adding the dynamic data in static file then you must have a directory with the name views 


// Changing the name of views and setting it to another 
const templatePath = path.join(__dirname,'./template');
console.log(templatePath)

app.set("views",templatePath);
app.get("/contact",(req,res)=>{
    res.render("contact.hbs");
});
app.listen(8000,()=>{
    console.log("port : 8001")
})
