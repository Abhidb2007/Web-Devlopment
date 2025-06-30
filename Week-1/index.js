const express = require("express");
const { clearScreenDown } = require("readline");
const app = express();
app.get("/",function(req,res){
    res.send("hi there")
})
