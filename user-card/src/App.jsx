import { useState } from 'react'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)
  const userList=[{
    name: 'Kapil Raut',
    age: 20,
    profession: 'Software Engineer'
  }, {
    name: 'Shakti Tamang',
    age: 22,
    profession: 'Java developer'
  }, {
    name: 'Shreeya Rai',
    age: 21,
    profession: 'Product Manager'
  }]
  return (
    <>
    <div classname="app">
      <h1>User List</h1>
      <div className="user-list">
        {userList.map((user, index) => (
          <User 
            key={index}
            name={user.name}
            age={user.age}  
            profession={user.profession}
            />
        ))}
        </div>
    </div>
      
    </>
  )
}

export default App
