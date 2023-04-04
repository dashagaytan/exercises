import React, {useState} from "react";
import Contact from "./Contact"

function App() {

  const [name, setName] = useState({
    name: "",
    number: ""
  })

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

  function addName(){
    let newPerson = {
      name: "",
      number: ""
    }
    setName(prevName => {
      return {
        data:
        [...prevName, newPerson]
      }
    })
  }

//add a new name and number to the list using a Form
  function handleChange (e){
    const {value, name} = e.target
    setName(prevState => {
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setName(prevState=> ({
      data: [
        ...prevState.data, 
        {name: prevState.name, number: prevState.number}],
      name: "",
      number: ""
    }))
  }

  const listContacts = data.map((item, id)=>{
    return (
      <Contact
        name = {item.name}
        number = {item.number}
        key={item.id}
      />

    )
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        name ="name"
        value = {name.name}
        onChange={handleChange}
        placeholder="Name"/>
        
        <input 
        name ="number"
        value = {name.number}
        onChange={handleChange}
        placeholder="Number"/>

        <button>Submit</button>
      </form>
  
      <div className="App">
        {listContacts}
        <Contact />
        <button onClick={addName}>Add Name</button>
      </div>
    </>
  
  );
}

export default App;
