const mongoose =require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DEV_URI).then(()=>{
    console.log("MongoDB connected sucessfully");
}).catch((err)=>{
    throw new Error (err)
})