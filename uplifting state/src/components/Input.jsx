import React from 'react'
import '../styles/input.css'
const Input = ({value, onchange}) => {
  return (
   <div className="input">
     <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={onchange}
        placeholder="Enter your name"
        />
        
   </div>
  )
}

export default Input