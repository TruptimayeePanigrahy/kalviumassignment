const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://trupti:panigrahy@cluster0.lxkbtuo.mongodb.net/data?retryWrites=true&w=majority")


module.exports={connection}