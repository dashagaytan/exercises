import React, {useState} from "react";

function AddMovieForm(props){

const initInputs = {title: " ", genre: " "}
const [inputs, setInputs] = useState(initInputs)


function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault();
    console.log(inputs)
    props.addMovie(inputs); //after taking in props from our App component we have to pass in inputs that will take in user input
    setInputs(initInputs);
}


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Movie Title"
            name="title"
            vlaue={inputs.title}
            onChange={handleChange}
            />

            <input
            type="text"
            placeholder="Genre"
            name="genre"
            vlaue={inputs.genre}
            onChange={handleChange}
            />
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovieForm;