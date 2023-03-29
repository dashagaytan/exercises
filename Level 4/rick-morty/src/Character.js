// Character components holds each individual character from the API
import React,{useState, useEffect} from "react";

function Character(props){
    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.id}</p>
            <img  src={props.image} alt=""/>
        </>
    )
}

export default Character;