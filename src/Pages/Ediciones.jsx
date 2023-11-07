import React, { useRef } from 'react' // eslint-disable-line
import './Ediciones.css'
import PageTransition from '../Components/PageTransition'
import { motion, useTransform } from 'framer-motion'
import { useScroll } from "framer-motion"

const Ediciones = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 1 } },
  };

  return (
    <PageTransition>
      <div className='ediciones-wrap'>
        <div className='needed-photo' style={{ backgroundImage: `url('./Images/FotosEdiciones/pag.jpg')` }}>
        <motion.h1
        variants={textVariants} initial="hidden" animate="visible"
        >Ediciones</motion.h1>
        <section>
          <motion.div 
          variants={textVariants} initial="hidden" animate="visible"
          className='needed'>
            <h2>¿Que necesito?</h2>
            <h3>Horarios de atencion: </h3>
            <p>De 10:00 am a  8:00 pm</p>
            <ul>
              <li>Se pide enviar  su foto con la mejor calidad posible para un mejor resultado al correo francescahdezs@gmail.com</li>
              <li>Haz tu lista muy detallada de lo que quiere que sea editado</li>
              <li>Al entregar la foto terminada solo puede ser modificada una vez mas</li>
              <li>Se empieza a trabajar cuando el pago esté hecho.</li>
            </ul>
          </motion.div>
        </section>
        </div>
        
        <h2 className='precios'>Precios:</h2>
        <div 
        className='paquetes-wrap'> 
          <div className='paquetes'>
            <h2><span>Edición básica</span> $95</h2>
            <ul>
              <li>Quitar objetos de la imagen</li>
              <li>Corrección de luces y sombras</li>
              <li>Corrección de color</li>
            </ul>
            <img id='foto-sencilla' src='./Images/FotosEdiciones/2.jpg' loading='lazy'/>
          </div>
          <div className='paquetes'>
            <h2><span>Edición media</span> $150</h2>
            <ul>
              <li>Quitar objetos de la imagen</li>
              <li>Correción de luces y sombras</li>
              <li>Correción de color</li>
              <li>Edición de objetos</li>
              <li>Enfoque y/o desenfoque de objetos</li>
              <li>Limpiar imagen</li>
              <li>Dodge and burn</li>
              <li>Otros detalles en photoshop</li>
            </ul>
            <img id='foto-mediana' src='./Images/FotosEdiciones/6.jpg' loading='lazy'/>
          </div>
          <div className='paquetes'>
            <h2><span>Fine art</span> $250</h2>
            <ul>
              <li>Edicion fine art cero</li>
              <li>Photoshop avanzado</li>
              <li>Hacer tu lista detallada de lo que buscas cambiar</li>
              <li>Enviar foto en raw o en la mejor calidad posible</li>
            </ul>
            <div className='images-layout-fine'>
            <img id='foto-derecha' src='./Images/FotosEdiciones/5.jpg' loading='lazy'/>
            <img id='foto-derecha' src='./Images/FotosEdiciones/4.jpg' loading='lazy'/>
            </div>
          </div>
        </div>

        <div className='editions-package'>
          <motion.div 
           ref={ref}
           style={{
             scale: scaleProgress,
             opacity: opacityProgress
           }}
          className='package-event perPackage'>
            <h2>Por evento</h2>
              <p>Lightroom 150 fotos ......$800</p>
              <p>Lightroom 300 fotos ......$1000</p>
              <p>Se entrega en una semana según mi carga de trabajo</p>
              <p>Se pide entregar ya las fotos seleccionadas</p>
          </motion.div>
          <div className='vertical-line'></div>
          <motion.div 
           ref={ref}
           style={{
             scale: scaleProgress,
             opacity: opacityProgress
           }}
          className='package-event perEvent'>
          <h2>Por Paquete</h2>
            <div className='packages'>
              <span>BÁSICO</span>
              <p>5-10  fotos ....$80c/u</p>
              <p>10-20 fotos ...$70c/u</p>
            </div>
            <div className='packages'>
              <span>MEDIANO</span>
              <p>5-10 fotos....$130c/u</p>
              <p>10-20 fotos..$120c/u</p>
            </div>
            <div className='packages'>
              <span>FINE ART</span>
              <p>7 fotos o mas ...$230 c/u</p>
            </div>
          </motion.div>
        </div>
        <img id='image-footer' src='./Images/FotosEdiciones/prueba.jpg' loading='lazy'/>
      </div>
    </PageTransition>
  )
}

export default Ediciones
