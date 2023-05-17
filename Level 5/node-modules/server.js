const express = require("express")

const app = express()

//Fake data: 
const users = [
    { name: "Joe", age: 40 },
    { name: "Bob", age: 30 },
    { name: "Mil", age: 50 },
    { name: "Don", age: 80 },
    { name: "Bill", age: 10 }
]
app.get("/users", (req, res)=> {
    res.send(users)
})



app.listen(9000, () => {
    console.log("The server is running on port 9000")
})