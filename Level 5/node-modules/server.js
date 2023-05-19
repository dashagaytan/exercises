const express = require("express")
const {v4: uuidv4} = require('uuid')

const app = express()

app.use(express.json())

//Fake data: 
const movies = [
    { title: "Titanic", genre: "drama", _id: uuidv4()  },
    { title: "Spider Man", genre: "action", _id: uuidv4() },
    { title: "Lion King", genre: "fantasy", _id: uuidv4() },
    { title: "Star Wars", genre: "fantasy", _id: uuidv4() },
    { title: "Orphin", genre: "horror", _id: uuidv4() }
]

// get request 
app.get("/movies", (req, res)=> {
    res.send(movies)
})

//when adding a new movie we need to assign it an _id
app.post("/movies", (req, res)=>{
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Added ${newMovie.title} to our Database`)
})


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})


