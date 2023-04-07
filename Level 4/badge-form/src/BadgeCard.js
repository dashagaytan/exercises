import React from "react";

function BadgeCard(props){
    return(
        <>
        <h3>{props.fristName}</h3>
        <p>{props.phoneNumber}</p>
        <h6>{props.favoriteFood}</h6>
        </>
    )
}

export default BadgeCard;