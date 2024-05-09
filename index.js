const express=require("express");
const bodyParser=require("body-parser");
const path=require('path');
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

app.listen(3000,(err)=>{
    if(err) console.log("Error");
    console.log("http://localhost:"+3000);
})