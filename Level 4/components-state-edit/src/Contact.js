import React from "react";

function Contact(props) {

    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.number}</p>
        </div>
    )
}

export default Contact;