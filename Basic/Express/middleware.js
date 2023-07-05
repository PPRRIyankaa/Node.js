// req or res k bich m jo kaam ho rha h voh middleware ka hota h 
const path = require('path');
const express = require('express');

const app = express();
const staticPath = path.join(__dirname,"./public");
const errorPage = path.join(__dirname,"./template/views")
// console.log(path.join(__dirname,"../public"))
// builtin middleware 
// app.use(express.static(staticPath));
app.get("/",(req,res)=>{   
    res.write("<h1>hello from the express</h1>");

});
app.use('/contact',express.static(staticPath));
app.get("/contact",(req,res)=>{   
    res.send("<h1>hello from the contact</h1>");
});
app.set("views",errorPage);
app.get("/*",(req,res)=>{
    res.render("404.hbs",{
        error:"sorry"
    })
})
app.listen(8000,()=>{
    console.log("port : 8000")
})