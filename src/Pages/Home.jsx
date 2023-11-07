import React, { useState } from 'react' // eslint-disable-line
import BasicSlider from '../Components/BasicSlider'
import './Home.css'
import imgSesion from '../Const/HomeImagesConst'
import { NavLink } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'

const Home = () => {
  const [email, setEmail] = useState('');
  const [celphone, setCelphone] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [name, setName] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();

    if (email && celphone && mensaje && name) {

      const contenidoCorreo = `mailto:abl3ew3@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(`Mensaje: ${mensaje}%0D%0ANúmero de Celular: ${celphone}%0D%0ADirección de Correo: ${email}`)}`;


      window.location.href = contenidoCorreo;
      

      setEnviado(true);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

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
        <div className='about-me-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Et malesuada fames ac turpis. Amet volutpat consequat mauris nunc congue nisi vitae. Consequat id porta nibh venenatis cras sed felis eget. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. 
        </p>
        <img src='./Images/sobre-mi.jpg'/>
        </div>
      </div>
      <h2>¿En qué te podemos ayudar?</h2>
      <div className='contacto' id='contact'>
        <div className='message'>
          <p>Gracias por tu interes, déjanos tu mensaje estaremos respondiendo lo antes posible.
            Nuestro horario de atención es de 8:00 a.m. a 5:00 p.m.
          </p>
          <p>Teléfono: 3335705813
          </p>
        </div>
          <form onSubmit={handleEnviar}>
            <div className='input-group'>
              <input name='name' type='text' placeholder='Nombre' onChange={(e) => setName(e.target.value)}
          disabled={enviado} required/>
            </div>
            <div className='input-group'>
              <input  name='e-mail' type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}
          disabled={enviado} required/>
            </div>
            <div className='input-group'>
              <input name='celphone' type="tel" placeholder='Teléfono' onChange={(e) => setCelphone(e.target.value)}
          disabled={enviado} required/>
            </div>
            <div className='input-group'>
              <textarea name='message' id='message' placeholder='Mensaje' onChange={(e) => setMensaje(e.target.value)}
          disabled={enviado} required></textarea>
            </div>
            <button type='submit' disabled={enviado}>ENVIAR</button>
          </form>
        </div>
    </div>
    </PageTransition>
  )
}

export default Home
