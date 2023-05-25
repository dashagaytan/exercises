import React, {useState} from "react";
import "./components.css"

function AddTvShowForm(props){
    const initInputs = {title: '', genre: ''}
    const [inputs, setInputs]= useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevState => ({...prevState, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addTvShow(inputs)
        setInputs(initInputs)
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
            <button>Add Movie</button>
        </form>
        </div>
    )
}

export default AddTvShowForm;