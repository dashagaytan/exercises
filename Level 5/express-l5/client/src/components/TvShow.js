import React from "react";

function TvShow(props){
    const { title, genre, _id} = props
    return (
            <div className="tvShow">
                <h4>{title} | {genre}</h4>
                <button className="delete-btn" onClick={() => props.deleteTvShow(_id)}>Delete</button>
                <button className="edit-btn">Edit</button>
            </div>
    )
}

export default TvShow;