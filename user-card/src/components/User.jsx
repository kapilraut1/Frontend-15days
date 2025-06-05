import React from 'react'
import './User.css'
const User = (props) => {
  return (
    <>
        <div className="user-card">
            <div className="user-list">
                <h2>{props.name}</h2>
                <p>Age: {props.age}</p>
                <p>Location: {props.profession}</p>
                </div>
                
            </div>
    </>
  )
}

export default User