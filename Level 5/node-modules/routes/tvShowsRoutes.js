const express = require('express')
const tvShowsRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//Fake data: TV Shows
const tvShows = [
    { title: "Breaking Bad", genre: "drama", _id: uuidv4()  },
    { title: "Game of Thrones", genre: "drama", _id: uuidv4() },
    { title: "The Walking Dead", genre: "drama", _id: uuidv4() },
    { title: "The Big Bang Theory", genre: "drama", _id: uuidv4() },
    { title: "The Hunger Games", genre: "drama", _id: uuidv4() }
]

// get request tv shows
tvShowsRouter.get("/", (req, res)=> {
    res.send(tvShows) //sends the request data 
})

//GET ONE using url params. 
tvShowsRouter.get("/:tvShowsId", (req, res)=> {
    const tvShowsId = req.params.tvShowsId
    const foundTvShows = tvShows.find(tvShows => tvShows._id === tvShowsId)
    res.send(foundTvShows)
})

//GET one using url query
tvShowsRouter.get("/search/genre", (req, res)=> {
    const genre = req.query.genre
    const filteredTvShows = tvShows.filter( tvShows => tvShows.genre === genre)
    res.send(filteredTvShows)
})
//post request tv shows
tvShowsRouter.post("/", (req, res)=> {
    const newTvShow = req.body
    newTvShow._id = uuidv4();
    tvShows.push(newTvShow)
    res.send(`Added ${newTvShow.title} to our Database`)
})

//DELETE item from db
tvShowsRouter.delete("/:tvShowId", (req, res)=>{
    const tvShowId = req.params.tvShowId
    const tvShowIndex = tvShows.findIndex(tvShow => tvShow._id === tvShowId)
    tvShows.splice(tvShowIndex, 1)
    console.log("TV Show was deleted from Data Base!")
})

module.exports = tvShowsRouter