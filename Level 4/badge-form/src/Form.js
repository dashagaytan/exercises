import React, {useState} from "react";

function Form(props){

    //state that hadnles the form inputs
    const [formData, setFormData] = useState({
        firstName: "",
        phoneNumber: "",
        favoriteFood: ""
    })

    function handleChange(e){
        const {name, value} =e.target
        setFormData(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        props.addItemToBadge(formData);
    }

    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h1 className="title">Badge Form</h1>
            <input 
            name ="firstName"
            value ={formData.firstName}
            onChange ={handleChange}
            placeholder="First Name"
            />
             <input 
            name ="phoneNumber"
            value ={formData.phoneNumber}
            onChange ={handleChange}
            placeholder="Phone Number"
            />
             <input 
            name ="favoriteFood"
            value ={formData.favoriteFood}
            onChange ={handleChange}
            placeholder = "Favorite Food"
            />
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form;