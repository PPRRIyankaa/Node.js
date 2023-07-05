const express = require('express');
require("./db/conn")
const studentRouter = require("./routers/student")
const port = process.env.PORT || 8000;    //if we are hosting it anywhere then it will provide the port number
const Student = require("./models/student")

const app = express();
app.use(express.json());
app.use(studentRouter);
app.get("/student",(req,res)=>{
    res.send("hello guys")
})
// craetre a new student 
app.post("/student",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{res.send.status(201)(user)}).error((error)=>{res.send.status(400)(error)});  //to store the incoming data in database ,return promise 
    res.send("hello guys")
})

// using async and await 
app.post("/",async(req,res)=>{
    try{
        const user = new Student(req.body);
        console.log(user);
        const createuser = await user.save();
        res.status(201).send(createuser);
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

app.get("/student1",async(req,res)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(error){
        res.send(error);
    }
})

// to get individual data 
app.get("/student2/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        // console.log(req.params.id);
        // res.json(req.params.id);


        const studentData = await Student.findById(_id);
        console.log(studentData)
        if(!studentData){
            res.status(404).send("m pagal hu");
        }
        else
        res.send(studentData);

    }catch(error){
        res.status(400).send(error);
    }
})

// update the students by its iid
app.patch("/student3/:id",async(req,res)=>{
    try{
    const _id = req.params.id;
    const obj = req.body;
    const updateStudent = await Student.findByIdAndUpdate(_id,obj,{new:true});
    res.send(updateStudent);
    }catch(error){
        res.status(400).send(error);
    }

})



// delete the record 
app.delete("/student/:id",async(req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            req.status(400).send();
        }
        res.send(deleteStudent)
    }catch(error){
        res.status(404).send(error);
    }
})
app.listen(port, ()=>{
    console.log(`Connection is setupt at port no : ${port}`);
})




// express.json() is a method inbuilt in express to recogonise the incoming 
// Request Object is a JSON object. This method is called as a middleware in your application using the code: app.use(express.json())