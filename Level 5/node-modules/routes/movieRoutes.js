const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//Fake data: movies
const movies = [
    { title: "Titanic", genre: "drama", _id: uuidv4()  },
    { title: "Spider Man", genre: "action", _id: uuidv4() },
    { title: "Lion King", genre: "fantasy", _id: uuidv4() },
    { title: "Star Wars", genre: "fantasy", _id: uuidv4() },
    { title: "Orphin", genre: "horror", _id: uuidv4() }
]

//GET ALL
movieRouter.get("/", (req, res)=> {
    res.send(movies)
})

//GET ONE
movieRouter.get("/:movieId", (req, res)=>{
    // console.log(req.params.movieId)
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//GET BY GENRE
movieRouter.get("/search/genre", (req, res) => {
    // console.log(req)
    const genre = req.query.genre
    const movieGenre = movies.filter(movie => movie.genre === genre)
    res.send(movieGenre)
})
//when adding a new movie we need to assign it an _id
//POST ONE
movieRouter.post("/", (req, res)=>{
    const newMovie = req.body   
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Added ${newMovie.title} to our Database`)
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