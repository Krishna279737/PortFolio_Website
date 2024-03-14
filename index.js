const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))



app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.post("/", (req, res)=>{
    console.log(req.body)
    res.redirect("/");
})

app.listen(8080, ()=>{
    console.log("Server is listening on port 8080");
})
