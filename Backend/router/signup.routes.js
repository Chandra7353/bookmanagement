const express =require("express");
const { signupuser, LoginUser } = require("../controller/signup.controller");


let routes = express.Router();
routes.post("/signup", signupuser)
routes.post("/login", LoginUser)

module.exports = routes