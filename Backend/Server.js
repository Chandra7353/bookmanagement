const express = require('express')
require("dotenv").config()
require("./config/dbconnection")
const  cors=require("cors")
const signuproutes =require("./router/signup.routes")
const bookroutes=require("./router/books.routes")

let app = express()
app.use(express.json())
app.use(cors())


//Creating api 
app.use("/api/user", signuproutes)
app.use("/api/books",bookroutes)

// if user enter wrong url on the given  this will execute
app.use("*", (req, res, next)=>{
        res.status(404).json("Page Not Found")
})

//Error handling middleware
app.use((err , req, res, next)=>{
    res.status(304).json({error:true, message:err.message, data:"error data !!!!!!!!"})
})

app.listen(process.env.PORT ,()=>{
    console.log(`server running sucessfully ${process.env.PORT}`);
})