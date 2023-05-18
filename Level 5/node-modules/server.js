const express = require("express")

const app = express()

app.use(express.json())

//Fake data: 
const movies = [
    { title: "Titanic", genre: "drama" },
    { title: "Spider Man", genre: "action" },
    { title: "Lion King", genre: "fantasy" },
    { title: "Star Wars", genre: "fantasy" },
    { title: "Orphin", genre: "horror" }
]

// get request 
app.get("/movies", (req, res)=> {
    res.send(movies)
})

app.post("/movies", (req, res)=>{
    const newMovie = req.body
    movies.push(newMovie)
    res.send(`Added ${newMovie.title} to our Database`)
})


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})