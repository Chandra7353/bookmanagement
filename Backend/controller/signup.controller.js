const User = require("../models/signup.models.js")
const jwt = require("jsonwebtoken")



let signupuser = async (req, res, next) => {
    try {
        let { name, email, password } = req.body;
        let isavailable = await User.findOne({ email })

        if (!isavailable) {
            let createUser = await User.create({ name, email, password })
            return res.status(200).json({ error: false, message: "Account created sucessfully", data: { name: createUser.name, email: createUser.email } })
        }
        return res.status(400).json({ error: true, message: "user already exists" })

    }
    catch (err) {
        next(err)
    }
}

let LoginUser = async (req, res, next) => {


    try {

        let { email, password } = req.body;

        let isavailable = await User.findOne({ email })

        if (!isavailable) {

            return res.status(300).json({ error: true, message: "Given email id not found any User", })
        }

        //comparing hash password
        let haspassword = await isavailable.compareMypassword(password)

        if (haspassword) {


            // JWT Token generation
            let tokengenerator = jwt.sign({ email: isavailable.email, name: isavailable.name, _id: isavailable._id },
                process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRESIN })

            return res.status(201).json({ error: false, message: "User login sucessfuly", data: tokengenerator, isavailable })

        }
        else {
            return res.status(401).json({ error: true, message: "invalied password" })
        }

    }

    catch (err) {
        next(err)
    }

}

module.exports = {
    signupuser,
    LoginUser
}
