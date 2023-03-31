import React, {useState} from "react";

function App() {

  //create state to store usernames
  const [username, setUsername] = useState("bob-bilby")
  const [names, setNames] = useState(["Lord", "Far", "Quad"])

  console.log("App component rendered")

  function changeUsername(){
    console.log("changeName function ran")
    //1. changing state by passing in new state value
    setUsername("chily-healer")

  }

  function addName(){
    //2. passing in a callback function that will
    // give access to previous state
    // overwrite, and add the new state
    setNames()
  }

  //mapping through the names state and render each name in a paragraph tag 
  const listNames = names.map((name, index)=> {
    return <p>{name}</p>
  })

  return (
    <div className="App">
      <h2>My name is: {username}</h2>
      <h2>List of names: </h2>
      {listNames}
      <button onClick={changeUsername}>Change username</button>
      <button onClick={addName}>Add Username</button>
    </div>
  );
}

export default App;
