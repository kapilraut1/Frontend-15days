import React from 'react'
import './index.css'    
const User = (props) => {
  return (
    <div className="user">
      <h2>User Information</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
    </div>
  ) 
}

export default User