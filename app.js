const express = require("express");
const app = express();
const ejs = require("ejs");


app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/recipes",(req,res)=>{
    res.render("recipes");
})
app.get("/recipes/new",(req,res)=>{
    
})
app.get("/recipes/:id",(req,res)=>{

})
app.get("/recipes/:id/edit",(req,res)=>{

})
app.get("/recipes/new",(req,res)=>{

})
app.post("/recipes",(req,res)=>{

})

app.listen(5000);