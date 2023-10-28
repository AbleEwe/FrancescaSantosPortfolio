import React from 'react' //eslint-disable-line
import "./Styles/Footer.css"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer-wrap'>
        <div className='icons'>
         <div className='line'></div>
            <div className='icon facebook'>
                <a href='https://www.facebook.com/profile.php?id=100069087683575&mibextid=LQQJ4d'><BsFacebook size="2rem"/></a>
            </div>
            <div className='icon instagram'>
                <a href='https://instagram.com/francesca_santosh?igshid=MzRlODBiNWFlZA=='><BsInstagram size="2rem"/></a>
            </div>    
            <div className='icon whatsapp'>
                <a href='https://www.facebook.com/profile.php?id=100069087683575&mibextid=LQQJ4d'><BsWhatsapp size="2rem"/></a>
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
