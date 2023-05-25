import React from "react";
import "./components.css"

function Movie(props){
    const { title, genre, _id} = props
    return (
            <div className="movie">
                <h4>{title} | {genre}</h4>
                <button onClick={() => props.deleteMovie(_id)} className="delete-btn">Delete</button>
            </div>
    )
}

export default Movie;