import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


// User component to display user information
function User(props){
  const[users, setUsers] = useState(false);
return(
  <div className="user-card">
    <h2 className="user-name">{props.name}</h2>
    <p className="user-email">{props.email}</p>
    <p className="user-phone">{props.position}</p>
   
   {users && <p className="user-salary">{props.salary}</p>}
    <button className="user-button" onClick={() => setUsers(!users)}>
      {users ? "Hide Salary" : "Show Salary"}
    </button>

  </div>
)

}
  return (
    <>
      <User name="Kapil Raut" email="kapil@gmail.com" position="Software Engineer" salary="1 million" />
      <User name= "Shakti Tamang" email="shakti@gmail.com" position="Backend developer" salary="500k" />
     
    </>
  )
}

export default App
