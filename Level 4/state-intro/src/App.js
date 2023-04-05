import React,{useState} from "react";
function App() {

  
  //with useState you pass in an initial value. data type: (string, object, array...)
  const [name, setName] = useState("John Doe")
  console.log(`State: ${name}`)

  const changeName = () =>{
    setName(prevState => prevState === "John Doe" ? " Bob Smith" : "John Doe")
    console.log(changeName)
  }

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    imgUrl: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormInfo(prevState => {
      return {
        ...prevState, 
        [name]: value
      }
    })
  }

  return (
    <div className="app" style={{background: "pink", width: "400px", padding: "20px"}}> 
    <h1 style={{color: "rgb(230, 120, 196)"}}>{name}</h1>
    <button onClick={changeName}>Change Name</button>
<hr>
</hr>
    <form onSubmit={handleSubmit}>
      <input 
      name = "firstName"
      value = {formInfo.firstName}
      placeholder="Name"
      onChange={handleChange}
      />
      <input
      name = "imgUrl"
      value = {formInfo.imgUrl}
      placeholder="Image Url "
      onChange={handleChange}
      />
      <button>Submit</button>

    </form>
    </div>
  );
}

export default App;
