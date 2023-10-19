import { useState } from 'react' // eslint-disable-line
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Sesiones from "./Pages/Sesiones"
import Ediciones from './Pages/Ediciones';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/ediciones' element={<Ediciones/>}/>
        <Route path='/sesiones' element={<Sesiones/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
