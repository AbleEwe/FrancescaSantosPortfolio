import React from 'react' //eslint-disable-line
import "react-slideshow-image/dist/styles.css"
import { Fade, Zoom, Slide } from "react-slideshow-image" //eslint-disable-line
import './Styles/BasicSlider.css'


const imageUrl = [
    {
        url: '/Images/FotosCarrusel/Familiar-01.jpg',
        caption: 'Foto 1'
    },
    {
        url: '/Images/FotosCarrusel/Maternidad-01.jpg',
        caption: 'Foto 2'
    },
    {
        url: '/Images/FotosCarrusel/Startrails.jpg',
        caption: 'Foto 3'
    }
];


const BasicSlider = () => {
  return (
    <div className="slide-container">
    <Fade>
        {imageUrl.map((image, index) => (
            <div key={index} className="slide-item" style={{ backgroundImage: `url(${image.url})` }}>
            </div>
        ))}
    </Fade>
</div>
  )
}

export default BasicSlider
