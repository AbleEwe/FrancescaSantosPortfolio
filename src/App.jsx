import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home, Ediciones, Sesiones, Ceremonies, Wedings, Documental, Autumn, Birthday, Familiar, Graduation, Maternity, Portrait, Product, Setups, Kids } from './Pages';
import Footer from './Components/Footer';
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
        <Route path='/ceremonias' element={<Ceremonies/>}/>
        <Route path='/bodas' element={<Wedings/>}/>
        <Route path='/documental' element={<Documental/>}/>
        <Route path='/otono' element={<Autumn/>}/>
        <Route path='/cumpleanos' element={<Birthday/>}/>
        <Route path='/familiar' element={<Familiar/>}/>
        <Route path='/graduaciones' element={<Graduation/>}/>
        <Route path='/maternidad' element={<Maternity/>}/>
        <Route path='/retrato' element={<Portrait/>}/>
        <Route path='/producto' element={<Product/>}/>
        <Route path='/montajes' element={<Setups/>}/>
        <Route path='/infantil' element={<Kids/>}/>
      </Routes>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default App
