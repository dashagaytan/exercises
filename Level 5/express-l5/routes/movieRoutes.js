const express = require('express')
const movieRouter = express.Router()
const Movie = require("../models/movie.js")

//GET ALL
movieRouter.get("/", (req, res, next)=> {
    Movie.find({})
    .then(movies => {
      return res.status(200).send(movies);
    })
    .catch(err => {
      res.status(500);
      return next(err);
    });
})

//GET ONE
movieRouter.get("/:movieId", (req, res, next)=>{
    // console.log(req.params.movieId)
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with id ${movieId} was not found`)
        error.status = 404
        res.status(500)
        return next(error)
    }

    res.status(200).send(foundMovie)
})

//GET BY GENRE
movieRouter.get("/search/genre", (req, res, next) => {
    // console.log(req)
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const movieGenre = movies.filter(movie => movie.genre === genre)
    res.status(200).send(movieGenre)
})

//POST ONE
movieRouter.post("/", (req, res, next)=>{
    const newMovie = new Movie(req.body);
    newMovie.save()
      .then(savedMovie => {
        return res.status(201).send(savedMovie);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
}) 

//DELETE REQUEST 
movieRouter.delete("/:movieId", (req, res, next)=>{
    Movie.findOneAndDelete(
        {_id: req.params.movieId})
        .then((deletedItem)=> {
            if(!deletedItem){
                return res.status(404).send("Item not found");
            }
            return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
        })
        .catch((err)=>{
            res.status(500)
            return next(err)
        })
})

// UPDATE ONE / PUT REQUEST
movieRouter.put("/:movieId", (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieId},       // find this one to update
        req.body,                        // new data, update the object with this data
        { new: true })                   // send back the updated version 
            .then((updatedItem)=> {
            if(!updatedItem){
                return res.status(404).send("Item not found")
            }
            return res.status(200).send(updatedItem)
        })
        .catch((err)=> {
            res.status(500)
            return next(err)
        })
})

module.exports = movieRouter