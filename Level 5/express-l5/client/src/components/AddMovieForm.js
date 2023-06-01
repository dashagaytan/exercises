import React, {useState} from "react";


function AddMovieForm(props){

const initInputs = {title: props.title || " ", genre: props.genre || " ", releaseYear: props.releaseYear || " "}
const [inputs, setInputs] = useState(initInputs)


function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault();
    console.log(inputs)
    props.submit(inputs, props._id); //after taking in props from our App component we have to pass in inputs that will take in user input
    setInputs(initInputs);
}


    return(
        <div className="form-container">
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
                  <input
                type="text"
                placeholder="Release Year"
                name="releaseYear"
                vlaue={inputs.releaseYear}
                onChange={handleChange}
                />
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

export default AddMovieForm;