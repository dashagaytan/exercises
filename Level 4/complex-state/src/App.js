import React, {useState} from "react";

function App() {

  //create state to store usernames
  const [username, setUsername] = useState("bob-bilby")
  const [names, setNames] = useState(["Lord", "Far", "Quaad"])
  const [style, setStyle] = useState({
    backgroundColor: "pink",
    width: "300px",
    fontSize: "20px"
  })

  const [person, setPerson] = useState({
    name: "John",
    age: "60",
    address: {
      street: "whipple",
      city: "Tree",
      state: "CA"
    },
    favoriteFood: ["pizza", "tacos"]
  })

  console.log("App component rendered")

  function changeUsername(){
    console.log("changeName function ran")
    //1. changing state by passing in new state value
    setUsername("Lord Farquuad-healer")

  }

  function addName(){
    //2. passing in a callback function that will
    // give access to previous state
    // overwrite, and add the new state
    setNames((prevState)=> {  //explisit return 
      return [...prevState, username]

    })
  }

  function changeOrange(){
    //callback function with prevState to keep all the styles and only change the background color
    setStyle((prevState) => {
      return {
        ...prevState,
        backgroundColor: "orange"
    }
    })

  }

  function toggleBackground(){
    setStyle((prevState)=> {
      return {
        ...prevState,
        backgroundColor: prevState.backgroundColor === "pink" ? "orange" : "pink"
      }
    })
  }

  function changeStreet(){
    setPerson((prevState)=> {
      return{
        ...prevState,
        address: {
          ...prevState.address,
          street: "Cat ln"
        }
      }
    })
  }

  function addFood(){
    setPerson((prevState)=>{
      return{
        ...prevState,
        favoriteFood: [...prevState.favoriteFood, "ice-cream"]  //we spread prev items in the array and hardcode new fave food to the array.
      }
    })
  }

  //mapping through the names state and render each name in a paragraph tag 
  const listNames = names.map((name, index)=> {
    return <p>{name}</p>
  })

  return (
    <div className="App" style ={style}>
      <h2 style={{color: "green"}}>My name is: {username}</h2>
      <h2>List of names: </h2>
      {listNames}
      <button onClick={changeUsername}>Change username</button>
      <button  onClick={addName}>Add Username</button>
      <button onClick={changeOrange}>Change Background Color to orange</button>
      <br>
      </br>
      <button onClick={toggleBackground}>Toggle Background color</button>
      <button onClick={changeStreet}>Change Street Name</button>
      <br>
      </br>
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}

export default App;
