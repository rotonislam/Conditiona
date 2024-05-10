import React, { useState, useSyncExternalStore } from 'react'






function Previous_State() {

    const [count , setCount] = useState(0);
    

    const handleClick = () => {
        setCount((PreviousCount) => PreviousCount + 10)
    }


  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Previous_State;