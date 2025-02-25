import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RoutesConfig from "./config/RoutesConfig"
import "./App.css"
import Container from '@mui/material/Container';
import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
export default function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow flex'>
        <Container>
          <RoutesConfig />
        </Container>
      </div>
      <ToastContainer position='top-right' autoClose={2000}/>

      <Footer />
    </div>
  )
}
