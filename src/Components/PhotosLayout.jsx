import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Styles/PhotosLayout.css';

const PhotosLayout = ({ pictures }) => {
  const [isVisible, setIsVisible] = useState(Array(pictures.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const newVisibleStatus = pictures.map((picture, index) => {
        const imageOffsetTop = document.getElementById(`image-${index}`).offsetTop;
        return imageOffsetTop < scrollY + windowHeight;
      });

      setIsVisible(newVisibleStatus);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pictures]);

  return (
    <div className='container'>
      {pictures.map((picture, index) => (
        <motion.div
          key={index}
          id={`image-${index}`}
          className='box'
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible[index] ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={picture.url} loading='lazy' alt={`image-${index}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default PhotosLayout;
