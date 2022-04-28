import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleClick = (e) => {
    if (e.target.className === 'up'){
      setCount(count + 1)
    }
    else if (e.target.className === 'down'){
      if (count > 0){
        setCount(count - 1)
      } else if ( count <= 0){
        setDisplay(false)
      }
    }
  }

  return (
    <div>
      <span>{count}</span>
      <div className="button__container">
        <button className="up" onClick={handleClick}>Up</button>
        <button className="down" onClick={handleClick}>Down</button>
      </div>
    </div>
  )
}

export default Counter
