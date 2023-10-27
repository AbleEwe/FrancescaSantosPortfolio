import React from 'react' // eslint-disable-line
import sesionesIMG from '../Const/SesionesPageConst'
import './Sesiones.css'
import { NavLink } from 'react-router-dom'

const Sesiones = () => {
  return (
    <div className='sesions-page-wrap'>
      <h1>Escoge tu sesión</h1>
      <div className='sesions-landing'>
        {sesionesIMG.map((img, index) => (
          <div className='IMG-sesions' key={index}>
            <NavLink className='navlink-hover' key={img.Caption} to={img.path}>
              <img src={img.Url} alt={img.Caption} loading='lazy'/>
              <span>{img.Caption}</span>
            </NavLink>
          </div>         
        ))}
      </div>
    </div>
  )
}

export default Sesiones
