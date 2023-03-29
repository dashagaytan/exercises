import React,{useState, useEffect}from "react";
import axios from "axios";

function App() {

//make an api request to pul in the first 20 chars from api
// set it to state
// render a character card for each char
// edit each character

// const [background, setBackground] = useState("pink")

// console.log("App component has mounted")

// useEffect(()=> {
//   console.log("useEffect in App was called")
// },[])

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character")
    .then(res => console.log(res))
    .catch(err => console.log(err))
})


  return (
    <div className="app" style={{backgroundColor: background, height: "400px"}}>
      <h1>App component</h1>
      <button>Change Color</button>
    </div>
  );
}

export default App;
