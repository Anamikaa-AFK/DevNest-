const express = require("express");
const app = express();
const port = 8080;
const path= require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));

app.get("/watchandcode",(req,res)=>{
    res.render("index.ejs");
})

app.get("/watchandcode/curriculum",(req,res)=>{

    res.render("show.ejs");


})

app.get("/watchandcode/join",(req,res)=>{

    res.render("enroll.ejs");


})

app.get("/watchandcode/pricing",(req,res)=>{

    res.render("price.ejs");
})

app.get("/watchandcode/blog",(req,res)=>{

    res.render("blog.ejs");
})

app.get("/watchandcode/feature",(req,res)=>{

    res.render("feature.ejs");
})

app.get("/watchandcode/review",(req,res)=>{

    res.render("review.ejs");
})

app.listen(port,()=>{
    console.log("listening on port");
})


