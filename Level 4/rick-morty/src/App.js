import React,{useState, useEffect}from "react";
import axios from "axios";
import Character from "./Character";

function App() {

//make an api request to pul in the first 20 chars from api
// set it to state
// render a character card for each char
// edit each character

// const [background, setBackground] = useState("pink")
const [characters, setCharacters] = useState([])

function editCharacter(id, update){
  // console.log("editCharacter function was called")
  // console.log("editCharacter function is updating: ", id, " with an updata ", update)
  setCharacters((prevState) => {
    return prevState.map((character) => {
      if(character.id === id){
      return {
        ...character,
        name: update.firstName
      }
    }
      else
        return character
    })
  })
}

console.log("App component has mounted")

// mapping through a list of characters
const list = characters.map((char)=>{
  return (
    <Character 
      id = {char.id}
      key={char.id}
      name ={char.name}
      image ={char.image}
      editCharacter ={editCharacter}
    />)
})

useEffect(()=>{
  console.log("API useEffect is being called")
  axios.get("https://rickandmortyapi.com/api/character")
    .then(res => setCharacters(res.data.results))
    .catch(err => console.log(err))
},[])


  return (
    <div className="app" style={{background: "pink", height: "900"}}>
      <h1>Rick and Morty Characters: </h1>
      {list}
      {/* <button>Change Color</button> */}
    </div>
  );
}

export default App;
