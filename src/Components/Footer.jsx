import React from 'react' //eslint-disable-line
import "./Styles/Footer.css"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer-wrap'>
        <div className='icons'>
         <div className='line'></div>
            <div className='icon facebook'>
                <a href='https://www.facebook.com/Francesca-Santos-Fot%C3%B3grafa-628727967504241'><BsFacebook size="2rem"/></a>
            </div>
            <div className='icon instagram'>
                <a href='https://instagram.com/francesca_santosh'><BsInstagram size="2rem"/></a>
            </div>    
            <div className='icon whatsapp'>
                <a href='https://wa.me/message/BZBNMUE5WGPYD1'><BsWhatsapp size="2rem"/></a>
            </div>
            <div className='line'></div>
        </div>
        <div className='copyright'>
            <img src='./Images/Logos/Iso-Color.png' alt='logo foto'/>
            <p>
                &copy;{new Date().getFullYear()} Francesca Santos Foto
            </p>
            <p>
                AVISO DE PRIVACIDAD  |  INFORMACION LEGAL
            </p>
        </div>
    </div>
  )
}

export default Footer
