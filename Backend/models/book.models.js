const  mongoose=require("mongoose")

let bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model("book", bookSchema)