import React from 'react' // eslint-disable-line
import "./Styles/SeesionsBackground.css" 

const SesionsLayout = ({ photos }) => { // eslint-disable-line
  return (
    <div className='image-bg-container'>
        {photos.map((photo, index) => ( // eslint-disable-line
            <div key={index}  className='image-bg' style={{ backgroundImage: `url(${photo.ImageBg})` }}>
            </div>
        ))}
    </div>
  )
}

export default SesionsLayout
