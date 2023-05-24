import React, {useState} from "react";

function AddMovieForm(props){

const initInputs = {title: " ", genre: " "}
const [inputs, setInputs] = useState(initInputs)


function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault();
    // put request
    setInputs(initInputs);
}


    return(
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Movie Title"
            type="text"
            name="title"
            vlaue={inputs.title}
            onChange={handleChange}
            />

            <input
            placeholder="Genre"
            type="text"
            name="genre"
            vlaue={inputs.genre}
            onChange={handleChange}
            />
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovieForm;