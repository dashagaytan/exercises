import React from "react";
import Contact from "./Contact";

function ContactList(props){
    const data = [
        {
          id: 0,
          name: "John Doe",
          number: "888-333-2211"
        },
        {
          id: 1,  
          name: "Jane Doe",
          number: "777-333-2211"
        },
        {
          id: 3,
          name: "Jo Doe",
          number: "999-333-2211"
        }
      ]
    
      const listContacts = data.map((item, id)=>{
        return (
          <Contact
            name = {item.name}
            number = {item.number}
            key={item.id}
          />
    
        )
      })
    return(
        <>
        {listContacts}
        </>
    )
}

export default ContactList;