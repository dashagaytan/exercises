import React, {useState} from "react";

function Post(props){
    const [showForm, setShowForm] = React.useState(false)

return(
    <div className="blog-post">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Edit</button>
    </div>
)
}

export default Post;