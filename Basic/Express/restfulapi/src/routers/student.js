const express = require('express');
const router = new express.Router();

router.get("/contact",(req,res)=>{
    res.send("Contact Us");
})

module.exports = router;