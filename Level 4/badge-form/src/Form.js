import React, {useState} from "react";
import BadgeCard from "./BadgeCard"

function Form(){

    //state that hadnles the form inputs
    const [formData, setFormData] = useState({
        firstName: "",
        phoneNumber: "",
        favoriteFood: ""
    })

    //state that will save and display user form inputs
    const [badge, setBadge] = useState([]) 

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
        setBadge(prevState =>{
            return[
                ...prevState,
            {
                firstName: formData.firstName,
                phoneNumber: formData.phoneNumber,
                favoriteFood: formData.favoriteFood
            } 
        ]
        })
        setFormData({
            firstName: "",
            phoneNumber: "",
            favoriteFood: ""
        })
    }

    const badgeList = badge.map((item, index)=>{
        return (
            <BadgeCard 
            firstName = {item.firstName}
            phoneNumber = {item.phoneNumber}
            favoriteFood = {item.favoriteFood}
            key = {index+item.firstName}
            />
        )
    })

    return(
        <div className="form">
        <form onSubmit={handleSubmit}>
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
        {badgeList}
        </div>
    )
}

export default Form;