import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Register from "../pages/Register"
import GameDetail from "../pages/GameDetail"

export default function RoutesConfig() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/game/:id' element={<GameDetail/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}
