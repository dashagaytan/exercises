import React,{useState} from "react";
function App() {

  
  //with useState you pass in an initial value. data type: (string, object, array...)
  const [name, setName] = useState("John Doe")
  console.log(`State: ${name}`)

  const changeName = () =>{
    setName(prevState => prevState === "John Doe" ? " Bob Smith" : "John Doe")
    console.log(changeName)
  }

  return (
    <div className="app" style={{border: "1px solid purple", background: "pink", width: "300px", padding: "20px"}}> 
    <h1 style={{color: "rgb(230, 120, 196)"}}>{name}</h1>
    <button onClick={changeName}>Change Name</button>

    </div>
  );
}

export default App;
