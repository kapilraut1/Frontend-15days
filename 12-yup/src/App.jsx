import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Today's practice form is :</h1>
   <Form />
    </>
  )
}

export default App
