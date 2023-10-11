import { useState } from 'react' // eslint-disable-line
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Sesiones from "./Pages/Sesiones"
import Contacto from './Pages/Contact';
import Ediciones from './Pages/Ediciones';
import Francesca from "./Pages/Francesca-santos"

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/francesca-santos' element={<Francesca/>}/>
        <Route path='/ediciones' element={<Ediciones/>}/>
        <Route path='/sesiones' element={<Sesiones/>}/>
      </Routes>
    </div>
  )
}

export default App
