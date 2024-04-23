import React, { useState } from 'react'

const TuningComponent = () => {
  const [count, setCount] = useState(0);
  function Increament() {
    setCount(count+1);

  }
  const Decreament = () => {
    if (count > 0){
      setCount(count-1) 
    }
   
  }
  //Increament();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}> decreament</button>
      </div>
  )
}

export default TuningComponent;