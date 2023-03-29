// Character components holds each individual character from the API
import React,{useState} from "react";

function Character(props){

    const [isEditOn, setIsEditOn] = useState(false)
    const [formInputs, setFormInputs] = useState({
        firstName: ""
    })

    function toggleEdit(){
        setIsEditOn(prevState=>!prevState)
    }
    
    function handleChange(e){
        const {name, value} = e.target
        setFormInputs(prevState=>{
            return{
                ...prevState,
                [name]:value
            }
        })
    }

    return(
        <div>
            {isEditOn ? 
                <form>
                    <input 
                    name ="firstName"
                    value ={formInputs.firstName}
                    onChange={handleChange}
                    />
                </form>
                :
                <>
                    <h2>{props.name}</h2>
                </>
            }
            {/* <p>{props.id}</p> */}
            <img  src={props.image} alt=""/>

            <button onClick={toggleEdit}>{isEditOn ? "Close" : "Edit"}</button>
        </div>
    )
}

export default Character;