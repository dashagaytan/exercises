import React, {useState, useEffect} from "react";
import axios from 'axios'
import Movie from "./components/Movie.js"

function App(){
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get("/movies")
            .then(res => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch(err => console.log(err))
        
    },[])


    return(
        <>
            <h1 style={{alignItems: "center"}}> Movies: </h1>
        {movies.map(movie => <Movie {...movie} key ={movie.title}/>)}
        </>
    )
}

export default App;