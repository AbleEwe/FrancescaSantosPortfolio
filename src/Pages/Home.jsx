import React from 'react' // eslint-disable-line
import BasicSlider from '../Components/BasicSlider'
import './Home.css'
import imgSesion from '../Const/HomeImagesConst'
import { NavLink } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'

const Home = () => {
  return (
    <PageTransition>
    <div className='home-wrap'>
      <BasicSlider/>
      <h1>SESIONES</h1> 
      <div className='sesiones-wrap'>
        {imgSesion.map((img, index) => (
          <div className='img-container' key={index}>
            <NavLink className='navlink-hover' key={img.Caption} to={img.path}>
              <img src={img.Url} alt={img.Caption} loading='lazy'/>
            <span>{img.Caption}</span>
            </NavLink>  
          </div>   
              
        ))}
      </div>
      <div className='about-me' id='francesca-santos'>
        <h1>SOBRE MI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Et malesuada fames ac turpis. Amet volutpat consequat mauris nunc congue nisi vitae. Consequat id porta nibh venenatis cras sed felis eget. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. 
        </p>
      </div>
      <h2>¿En qué te podemos ayudar?</h2>
      <div className='contacto' id='contact'>
        <div className='message'>
          <p>Gracias por tu interes, déjanos tu mensaje estaremos respondiendo lo antes posible.
            Nuestro horario de atención es de 8:00 a.m. a 5:00 p.m.
          </p>
        </div>
          <form>
            <div className='input-group'>
              <input type='text' placeholder='Nombre'/>
            </div>
            <div className='input-group'>
              <input type='email' placeholder='E-mail'/>
            </div>
            <div className='input-group'>
              <input type="tel" placeholder='Teléfono'/>
            </div>
            <div className='input-group'>
              <textarea id='message' placeholder='Mensaje'></textarea>
            </div>
            <button type='submit'>ENVIAR</button>
          </form>
        </div>
    </div>
    </PageTransition>
  )
}

export default Home
