import { useState } from 'react'
import './App.css'
import User from './User'

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  )
}
function App() {

  return (
    <>
      <Card>
    <h1>React Children Example</h1>
    <User name="Kaps" age={21} address="Bhaktapur"/>
    <User name="Kapil" age={20} address="KTM"/>
</Card>
<Card>
  <h1>Different ways to greet...</h1>
  <ul>
    <li>Hello</li>
    <li>Hi</li>
    <li>Hey</li>
    <li>Hola</li>
  </ul>
</Card>
    </>
  )
}

export default App
