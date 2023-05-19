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

// get request movies
// movieRouter.get("/", (req, res)=> {
//     res.send(movies)
// })

//when adding a new movie we need to assign it an _id
// movieRouter.post("/", (req, res)=>{
//     const newMovie = req.body   
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Added ${newMovie.title} to our Database`)
// })

//in each request that we are sending like get or post: instead of using the path "/ " express router has a declarative feature 
movieRouter.route("/")
    .get((req, res)=> {
        res.send(movies)
    })
    .post((req, res)=>{
        const newMovie = req.body   
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Added ${newMovie.title} to our Database`)
    })
    //.put()
    //.delete()

module.exports = movieRouter