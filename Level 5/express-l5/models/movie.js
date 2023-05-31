const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Movie blueprint

const movieSchema = new Schema({
    title: String, 
    genre: String,
    releaseYear: Number
})