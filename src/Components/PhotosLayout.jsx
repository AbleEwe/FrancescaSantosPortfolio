import React from 'react' //eslint-disable-line
import './Styles/PhotosLayout.css'

const PhotosLayout = ({ pictures }) => { //eslint-disable-line
  return (
    <div className='container'>
      {pictures.map((picture, index) => ( //eslint-disable-line
        <div key={index} className='box'><img src={picture.url} loading='lazy'></img></div>
      ))}
    </div>
  )
}

export default PhotosLayout;
