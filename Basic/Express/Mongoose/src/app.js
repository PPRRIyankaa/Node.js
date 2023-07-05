const mongoose = require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/Priyanka_Verma")
.then(()=>{
    console.log("Connnection Successful....");
}).catch((error)=>{
    console.log(error)
})

// Mongoose schema defines the structure of document, default values, validators etc 
const studentDetails = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    branch:String,
    rollno:Number,
    college:String,
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("Email is inValid")
    //         }
    //     }
    // },
    date:{
        type:Date,
        default:Date.now()
    }
})

// Mongoose model is a wrapper on the mongoose schema. Mongoosse model provides an interface to the database for creating, queringn, updating , deletong records

const StudentDetails = new mongoose.model("StudentDetail1",studentDetails)      //it is a class and it contain two parameters name of collection and type of structure

// create document 


const AddDetail = async ()=>{
    try{
    const student2 = new StudentDetails({
        name:"Kritika",
        branch:"Production",
        rollno:12014717,
        college:"Nit kkr",        
    })

    const student3 = new StudentDetails({
        name:"Kritika",
        branch:"Production",
        rollno:12014717,
        college:"Nit kkr",       
    })
    
    const student4 = new StudentDetails({
        name:"Yogesh",
        branch:"Civil",
        rollno:12314717,
        college:"Nit kkr",
        
    })
    // const result = await student1.save();
    // console.log(result);

    // const result = await StudentDetails.insertMany([student2,student3,student4]);
    // await StudentDetails.updateMany({name:'Kritika'},{$set:{rollno:12121212}});
    await StudentDetails.updateMany({_id:'64202a27992ed97ee12ba642'},{$set:{rollno:1}});
    await StudentDetails.deleteOne({_id:'64202a27992ed97ee12ba641'})

    // console.log(result)
    }catch(error){
        console.log(error)
    }
}
AddDetail();

// Reading the data 
// const getDocument = async () =>{
//     try{
//     const result = await StudentDetails.find();
//     console.log(result);
//     const branch = await StudentDetails.find({branch:"Civil"}).select({name:1});
//     console.log(branch);
//     }catch(error){
//         console.log(error)
//     }
// }
// getDocument();

// Comparison <Operators


    // API Routes

app.post('/add',async (req,res)=>{
    const data=req.body;
    console.log(data)
//     const obj={
//        name:data.name,
//        branch:data.branch,
//        college:data.college
//     }

   await studentDetails.insertOne(data)
   res.send("Successfully added!")
});


app.listen(3000,()=>{
    console.log("Running!")
})