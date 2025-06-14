import { useState } from 'react'
import Form from './components/Form'
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <ToastContainer
  position="bottom-right"
  autoClose={10000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
/>
   <h1>Today's practice form is :</h1>
   <Form />

    </>
  )
}

export default App
