import React,{useState} from "react";
function App() {

  
  //with useState you pass in an initial value. data type: (string, object, array...)
  const [name, setName] = useState(["Bob", "Joe", "Jane"])
  console.log(`State: ${name}`)

  const changeName = () =>{
    setName(prevState => prevState === "John Doe" ? " Bob Smith" : "John Doe")
    console.log(changeName)
  }

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    imgUrl: ""
  })

  const [list, setList] = useState([])

  //function that submits user inputs to a list
  const handleSubmit = (e) => {
    e.preventDefault();
    setList(prevState => {
      return [
        ...prevState,
        {
          firstName: formInfo.firstName,
          imgUrl: formInfo.imgUrl
        }
      ]
    })
    //to clear the inputs after form was submitted 
    setFormInfo({
      firstName: "", 
      imgUrl: ""
    })
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

  function addName(){
    const newName = "Ann";
    setName(prevState => {
      return [...prevState, newName]
    })
  }

  //mapping through a list of inputs and displaying them in DOM. 
  //each child component rendered must have a key identigier (index + item.firstName). if call from API we use id as key
  const listOfItems = list.map((item, index) => 
  <div key={index+item.firstName}>
    <p>First Name: {item.firstName}</p>
    <img src={item.imgUrl} alt="" style={{height: "200px"}}/>
  </div>)

  return (
    <div className="app" style={{background: "pink", width: "400px", padding: "20px"}}> 
    <h1 style={{color: "rgb(230, 120, 196)"}}>{name}</h1>
    <button onClick={changeName}>Change Name</button>
    <button onClick={addName}>Add Name</button>
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
    {listOfItems}
    </div>
  );
}

export default App;
