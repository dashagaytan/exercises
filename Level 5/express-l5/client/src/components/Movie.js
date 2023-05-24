import React from "react";

function Movie(props){
    return (
            <div className="movie">
                <h4>{props.title} | {props.genre}</h4>
            </div>
    )
}

export default Movie;