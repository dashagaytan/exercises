import React, {useState, useEffect} from "react";
import axios from 'axios'
import Movie from "./components/Movie.js"
import TvShow from "./components/TvShow.js";
import AddMovieForm from "./components/AddMovieForm.js";
import AddTvShowForm from "./components/AddTvShowForm.js";

function App(){
    //initial state for movies and tvShows
    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])

    //GET requests for movies and tvShows
    const getMovies =() => {
        axios.get("/movies")
        .then(res => {
            console.log(res.data)
            setMovies(res.data)
        })
        .catch(err => console.log(err))
    }
    useEffect(()=> {
        getMovies()
    },[])

    const getTvShows = () => {
        axios.get("/tvShows")
            .then(res => {
                console.log(res.data)
                setTvShows(res.data)
            })
            .catch(err => console.log(err))

    }
    useEffect(()=> {
        getTvShows();
    },[])
    
    //POST request : allows user to post a new movie to the list 
    function addMovie(newMovie){  //newMovie is a parameter that is comming from our server post request
        axios.post('/movies', newMovie) 
        .then(res => {
            setMovies(prevMovies => [...prevMovies, res.data])
        })
        .catch(err => console.log(err))
    }

    function addTvShow(newTvShow){
        axios.post("/tvShows", newTvShow)
        .then(res => {
            setTvShows(prevState => [...prevState, res.data])
        })
        .catch(err => console.log(err))
    }


    return(
        <>
            <div className="movie-container">
                <h1 style={{textAlign: "center", color: "blueviolet"}}> Movies: </h1>
                 <AddMovieForm 
                 addMovie={addMovie}
                 /> 
                {movies.map(movie => <Movie {...movie} key ={movie.title}/>)}
            </div>
            <hr></hr>
            <div className="tvShow-container">
                <h1 style={{textAlign: "center", color: "blueviolet"}}> TV Shows: </h1>
                <AddTvShowForm 
                addTvShow = {addTvShow}
                />
                {tvShows.map(tvShow => <TvShow {...tvShow} key ={tvShow.title}/>)}
            </div>
        </>
    )
}

export default App;