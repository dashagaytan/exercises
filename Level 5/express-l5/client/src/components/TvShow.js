import React from "react";

function TvShow(props){
    return (
            <div className="tvShow-container">
                <h4>{props.title} | {props.genre}</h4>
            </div>
    )
}

export default TvShow;