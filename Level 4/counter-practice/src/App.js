import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  useEffect (()=> {
    console.log("effect ran")
  })

  function handleAdd(){
    setCount(prevCount => prevCount +1)
  }

  function handleSubtract(){
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='main'>
      <h1>Your count is </h1>
        <div className='count-container'>
          <button onClick={handleAdd}> Add </button>
          <h2 className='count'>{count}</h2>
          <button onClick={handleSubtract}> Subtract </button>
        </div>
    </div>
  )
}

export default App;
