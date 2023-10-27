import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Sesiones from "./Pages/Sesiones"
import Ediciones from './Pages/Ediciones';
import Footer from './Components/Footer';
import CeremoniesPage from './Pages/SesionesSubPages/Ceremonies.jsx';
import BackToTopButton from './Components/BackToTopButton';
import ScrollToTop from './Components/ScrollToTop';


function App() {

  return (
    <div className='App'>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/ediciones' element={<Ediciones/>}/>
        <Route path='/sesiones' element={<Sesiones/>}/>
        <Route path='/ceremonias' element={<CeremoniesPage/>}/>
      </Routes>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default App
