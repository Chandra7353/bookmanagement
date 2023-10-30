const express=require("express")
const {auth}=require("../middlewares/authMiddleware");
const { addBook, viewallbooks, singlebook, updatebook, deltebook } = require("../controller/book.controller");


let routes = express.Router();

routes.post("/addbook",auth, addBook)
routes.get("/allbooks", auth, viewallbooks)
routes.get("/singlebook/:id", auth, singlebook)
routes.put("/updatebook/:id", auth, updatebook)
routes.delete("/deletebook/:id", auth, deltebook)


module.exports =routes