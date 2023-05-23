import React, {useState, useEffect} from "react";
import axios from "axios";

export default function App(){
    const [movies, setMovies]=useState([])

    useEffect(()=>{
        axios.get("/movies")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
        
        </>
    )
}
