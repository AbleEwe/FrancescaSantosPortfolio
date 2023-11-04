import React from 'react' // eslint-disable-line
import sesionesIMG from '../Const/SesionesPageConst'
import './Sesiones.css'
import { NavLink } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'
import { motion } from 'framer-motion'

const Sesiones = () => {
  return (
    <PageTransition>
      <div className='sesions-page-wrap'>
        <motion.h1
        initial={{ y: '20%' }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.3 }} 
        >Escoge tu sesión</motion.h1>
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
    </PageTransition>
  )
}

export default Sesiones
