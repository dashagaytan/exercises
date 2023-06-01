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
movieRouter.delete("/:movieId", (req, res)=>{
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    console.log("Movie was deleted from Data Base!")
})

// UPDATE ONE / PUT REQUEST
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updateMovie = Object.assign(movies[movieIndex], req.body)
    res.status(202).send(updateMovie)
})

//in each request that we are sending like get or post: instead of using the path "/ " express router has a declarative feature 
// movieRouter.route("/")
//     .get((req, res)=> {
//         res.send(movies)
//     })
//     .post((req, res)=>{
//         const newMovie = req.body   
//         newMovie._id = uuidv4()
//         movies.push(newMovie)
//         res.send(`Added ${newMovie.title} to our Database`)
//     })
    //.put()
    //.delete()

module.exports = movieRouter