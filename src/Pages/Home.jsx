import React from 'react' // eslint-disable-line
import BasicSlider from '../Components/BasicSlider'
import './Home.css'

const imgSesion = [
  {
    Url: "/Images/FotosSesiones/Bodas.jpg",
    Caption: "Bodas"
  },
  {
    Url: "/Images/FotosSesiones/Cumple.jpg",
    Caption: "Cumpleaños"
  },
  {
    Url: "/Images/FotosSesiones/Familiar.jpg",
    Caption: "Familiar"
  },
  {
    Url: "/Images/FotosSesiones/Infantil.jpg",
    Caption: "Infantil"
  },
  {
    Url: "/Images/FotosSesiones/Maternidad.jpg",
    Caption: "Maternidad"
  },
  {
    Url: "/Images/FotosSesiones/Retrato.jpg",
    Caption: "Retratos"
  }
]

const Home = () => {
  return (
    <div className='home-wrap'>
      <BasicSlider/>
      <h1>SESIONES</h1>
      <div className='sesiones-wrap'>
        {imgSesion.map((img, index) => (
          <div className='img-container' key={index}>
          <img src={img.Url} alt={img.Caption} loading='lazy'/>
          <span>{img.Caption}</span>
          </div>         
        ))}
      </div>
      <div className='about-me'>
        <h1>SOBRE MI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Et malesuada fames ac turpis. Amet volutpat consequat mauris nunc congue nisi vitae. Consequat id porta nibh venenatis cras sed felis eget. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. In nibh mauris cursus mattis molestie. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.
        </p>
      </div>
      <h2>¿En qué te podemos ayudar?</h2>
      <div className='contacto'>
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
  )
}

export default Home
