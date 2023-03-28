import React, {useState} from "react";

function Form(props){

    const [postForm, setPostForm] = useState({
        title: "",
        description: ""
    })

    const handleChange =(e)=>{
        const {name, value} = e.target
        setPostForm(prevState =>{
            return {
                ...prevState,
                [name]: value      
            }
    })}

    const handleSubmit =(e)=>{
        e.preventDefault()
       props.submit(postForm)
       setPostForm({
        title: "",
        description: ""
    })
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Enter Title"
                value={postForm.title} 
                onChange={handleChange}
                />

            <input
                name="description"
                placeholder="Enter Description"
                value={postForm.description} 
                onChange={handleChange}
                /> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;