import React, {useState} from "react";

function Post(props){
    const [showForm, setShowForm] = React.useState(false)

    //state that handles edit's form
    const [postInput, setPostInput] = useState({
        title: props.title,
        description: props.description
    })

    function editToggle(){
        setShowForm(prevState => !prevState)
    }

    //onChange handler
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
    <div className="blog-post">
        {showForm ? 
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
        // <p>show form here</p> 
        :
     <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
     </>
    }
        <button onClick={editToggle}>{showForm ? "Save" : "Edit"}</button>
    </div>
)
}
export default Post;