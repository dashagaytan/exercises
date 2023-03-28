import React, {useState} from "react";

function Form(props){

    const [postInput, setPostInput] = useState({
        title: props.title,
        description: props.description
    })

    const handleChange =(e)=>{
        const {name, value} = e.target
        setPostInput(prevState =>{
            return {
                ...prevState,
                [name]: value      
            }
    })}

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("form was submited and these are the values: ")
        console.log(postInput)
        props.updateBlog(props.id, postInput)
      
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={postInput.title} 
                onChange={handleChange}
                />

            <input
                name="description"
                value={postInput.description} 
                onChange={handleChange}
                /> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;