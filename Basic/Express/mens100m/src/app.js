const express = require("express");
const { get } = require("mongoose");
require("./db/conn");

const MensRanking = require("./models/men");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello guyssss");
})

app.post("/mens",async(req,res)=>{
    try{
        const record1 = new MensRanking(req.body);

        const insertsave = await record1.save();
        res.status(200).send(insertsave);
        console.log(insertsave)
    }
    catch(e){
        res.status(404).send(e);
    }
})

app.get("/mens",async(req,res)=>{
    try{
        const getdata = await new MensRanking.find().sort({"ranking":1});
        res.status(200).send(getdata);
        console.log(getdata);
    }
    catch(e){
        res.status(404).send(e);
    }
})

app.listen(port,()=>{
    console.log(`Connection is successful at port ${port}`);
})