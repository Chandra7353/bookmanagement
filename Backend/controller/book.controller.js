const Bookdata = require("../models/book.models")

let addBook = async (req, res, next) => {
    try {
        let { userid, title, author, summary } = req.body;
        console.log("userId")
        userid = req.user._id;

        // let task=await Task.create({userId,tname});
        let availabelbook = await Bookdata.create({ userid, title, author, summary });


        if (availabelbook) {
            return res.status(201).json({ error: false, message: "Book Added Successfully", data: availabelbook })
        }
        return res.status(500).json({ error: false, message: "invalid Book", data: null })


    }
    catch (err) {
        next(err)
    }
}


let viewallbooks = async (req, res, next) => {
    try {
        let books = await Bookdata.find({});

        if (!books.length) {
            return res.status(404).json({ error: true, message: "No Books Available", data: books })
        }
        return res.status(200).json({ error: false, message: "Books fetched Successfully", data: books })

    }
    catch (err) {
        next(err)
    }
}


let singlebook = async (req, res, next) => {
    try {
        let books = await Bookdata.findOne({ _id: req.params.id });

        if (books) {
            return res.status(200).json({ error: false, message: "Book Fetched Successfully", data: books })
        }
        return res.status(404).json({ error: true, message: "No Book Found " })


    }
    catch (err) {
        next(err)
    }
}

let updatebook = async (req, res, next) => {
    try {
        let isbookAvailable = await Bookdata.findOne({ _id: req.params.id })

        if (!isbookAvailable) {
            return res.status(404).json({ error: true, message: "No Book Found" })
        }

        let books = await Bookdata.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true, runValidators: true });

        return res.status(200).json({ error: false, message: "Book details Updated Successfully", data: books })


    }
    catch (err) {
        next(err)
    }
}

let deltebook = async (req, res, next) => {
    try {
        let isbookAvailable = await Bookdata.findOne({ _id: req.params.id })

        if (!isbookAvailable) {
            return res.status(404).json({ error: true, message: "No book Found" })
        }

        let books = await Bookdata.deleteOne({ _id: req.params.id });
        return res.status(200).json({ error: false, message: "Book Deleted Successfully", data: books })


    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    addBook,
    viewallbooks,
    singlebook,
    updatebook,
    deltebook
}