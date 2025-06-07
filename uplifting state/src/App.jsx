import { useState } from 'react'
import React from 'react'
import './App.css'
import Input from './components/Input'
import Preview from './components/Preview'

function App() {
const[text, setText] = useState('')

const handleChange = (e) => {
  setText(e.target.value)
}
  return (
    <>
    <div className="App">
     <Input value={text} onchange={handleChange} />
      <div className="preview">
      <Preview value={text} />
        </div>
      </div>
    </>
  )
}

export default App
