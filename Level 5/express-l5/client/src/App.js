import React, {useState, useEffect} from "react";
import axios from 'axios'
import Movie from "./components/Movie.js"
import TvShow from "./components/TvShow.js";

function App(){
    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])

    useEffect(()=> {
        axios.get("/movies")
            .then(res => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch(err => console.log(err))
        
    },[])

    useEffect(()=> {
        axios.get("/tvShows")
            .then(res => {
                console.log(res.data)
                setTvShows(res.data)
            })
            .catch(err => console.log(err))
        
    },[])
    

    return(
        <>
            <h1 style={{textAlign: "center", color: "blueviolet"}}> Movies: </h1>
            {movies.map(movie => <Movie {...movie} key ={movie.title}/>)}

            <h1 style={{textAlign: "center", color: "blueviolet"}}> TV Shows: </h1>
            {tvShows.map(tvShow => <TvShow {...tvShow} key ={tvShow.title}/>)}
        </>
    )
}

export default App;