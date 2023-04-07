import React, {useState} from "react";
import Form from "./Form"
import Badge from "./Badge"

function App(props) {
  //state that will save and display user form inputs
  const [badge, setBadge] = useState([]) 

  const badgeList = badge.map((item, index)=>{
      return (
          <Badge
          firstName = {item.firstName}
          phoneNumber = {item.phoneNumber}
          favoriteFood = {item.favoriteFood}
          key = {index+item.favoriteFood}
          />
      )
  })

  function addItemToBadge(newBadge){
      setBadge(prevState => [...prevState, newBadge])
  }

  return(
      <>
      <Form addItemToBadge={addItemToBadge}/>
      {badgeList}
      </>
  )
}

export default App;
