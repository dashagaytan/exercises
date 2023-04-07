import React from "react";

function BadgeCard(props){
    return(
        <div className="badge-label">
        <h2>{props.firstName}</h2>
        <p>{props.phoneNumber}</p>
        <h4>{props.favoriteFood}</h4>
        </div>
    )
}

export default BadgeCard;