import React, {useState} from "react";

function Post(props){
    const [showForm, setShowForm] = React.useState(false)

    function editToggle(){
        setShowForm(prevState => !prevState)
    }

return(
    <div className="blog-post">
        {showForm ? 
        <form>
            <input
                name="title"
                value={} 
                onChange={}/>

            <input
                name="description"
                value={} 
                onChange={}/>    
        </form>
        // <p>show form here</p> 
        :
     <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
     </>
    }
        <button onClick={editToggle}>{showForm ? "Close" : "Edit"}</button>
    </div>
)
}

export default Post;