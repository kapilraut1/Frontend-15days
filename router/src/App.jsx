import { useState } from 'react'
import React from 'react';
import {Link, Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
    <BrowserRouter>
       <nav style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path='/home' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element= {<Contact/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
