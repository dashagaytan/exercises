const express = require("express")

const app = express()

//Middleware (for every request)
app.use(express.json())  //Looks for a request body, and turns it inot 'req.body'

app.use("/items", (req, res, next)=>{
    console.log("The items middleware was executed")
    next()
})
app.get("/items", (req, res, next)=>{
    req.body = {name: "Rick"}
    next()
})
app.get("/items", (req, res, next)=> {
    res.send(req.body)
})

// Routes we tell the app to use our routes that we have created in order for the server to see it.
app.use("/movies", require("./routes/movieRoutes.js"))
 
app.use("/tvShows", (require("./routes/tvShowsRoutes.js")))

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})


