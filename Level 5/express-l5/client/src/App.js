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
        .catch(err => console.log(err.response.data.errMsg)) // error handler on server side will catch and console log it for FE to see the err msg
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

    //DELETE request: using _id to referance to the item we want to get rid of 
    function deleteMovie(movieId){
        axios.delete(`/movies/${movieId}`)
        .then(res => {
            setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
        })
        .catch(err => console.log(err))
    }

    function deleteTvShow(tvShowId){
        axios.delete(`/tvShows/${tvShowId}`)
        .then(res => {
            setTvShows(prevState => prevState.filter(movie => movie._id !== tvShowId))
        })
        .catch(err => console.log(err))
    }

    //PUT request: edits the title and genre
    function editMovie(newMovie, movieId){
        axios.put(`/movies/${movieId}`, newMovie)
        .then(res => {
            setMovies(prevState => prevState.map(movie => movie._id !== movieId ? movie : res.data)) //updates prev input with new input conditionaly
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="movie-container">
                <h1 style={{color: "blueviolet"}}> Movies: </h1>
                 <AddMovieForm 
                 submit={addMovie}
                 btnText = "Add Movie"
                 /> 
                { movies.map(movie => 
                    <Movie {...movie} 
                    key ={movie.title}
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}
                />)}

            </div>
            <hr></hr>
            <div className="tvShow-container">
                <h1 style={{color: "blueviolet"}}> TV Shows: </h1>
                <AddTvShowForm 
                submit = {addTvShow}
                btnText = "Add TV Show"
                />
                { tvShows.map(tvShow => 
                <TvShow {...tvShow} 
                key ={tvShow.title}
                deleteTvShow={deleteTvShow}
                />)}
            </div>
        </>
    )
}

export default App;