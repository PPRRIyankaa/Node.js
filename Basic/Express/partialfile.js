const express = require("express");
const hbs = require('hbs');
const path = require('path');

const app = express();

const templatePath = path.join(__dirname,"./template")
const partialPath = path.join(__dirname,"./template/partials");
const indexPath = path.join(__dirname,"./template/views")
hbs.registerPartials(partialPath);

app.set("views",templatePath);
app.get("/",(req,res)=>{
    res.write("Hello Guys");
    res.end();
})
app.set("views",indexPath);
app.get("/contact",(req,res)=>{
    res.render("index.hbs",{
        Name:"Priyanka"
    })
})
app.listen(8000,()=>{
    console.log("Port : 8010")
})