// Character components holds each individual character from the API
import React,{useState} from "react";

function Character(props){

    const [isEditOn, setIsEditOn] = useState(false)
    const [formInputs, setFormInputs] = useState({
        firstName: props.name
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

    function handleSave(e){
        e.preventDefault()
        console.log("Edit form was saved")
        console.log(formInputs)
        props.editCharacter(props.id, formInputs)

    }

    return(
        <div>
            {isEditOn ? 
                <form onSubmit={handleSave}>
                    <input 
                    name ="firstName"
                    value ={formInputs.firstName}
                    onChange={handleChange}
                    />

                    <button>Save Changes</button>
                </form>
                :
                <>
                    <h2>{props.name}</h2>
                </>
            }
            <p>{props.id}</p>
            <img  src={props.image} alt=""/>

            <button onClick={toggleEdit}>{isEditOn ? "Close" : "Edit"}</button>
        </div>
    )
}

export default Character;