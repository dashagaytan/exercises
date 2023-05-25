import React, {useState} from "react";
import "./components.css"
import AddMovieForm from "./AddMovieForm";

function Movie(props){
    const { title, genre, _id} = props
    const [edit, setEdit] = useState(false)

    return (
            <div className="movie">
                { !edit ?
                <>
                    <h4>{title} | {genre}</h4>
                    <button onClick={() => props.deleteMovie(_id)} className="delete-btn">Delete</button>
                    <button onClick={() => setEdit(prevState => !prevState)} className="edit-btn">Edit</button>
                </>
                    :
                    <>
                <AddMovieForm 
                        title = {title}
                        genre = {genre}
                        btnText = "Submit Edit"
                        submit={props.editMovie}
                        _id = {_id}
                    />
                 <button onClick={() => setEdit(prevState => !prevState)}>Close</button>
                 </>
                }
            </div>
    )
}

export default Movie;