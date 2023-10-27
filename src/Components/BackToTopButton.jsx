import React from 'react' //eslint-disable-line
import { useState, useEffect } from 'react'
import { FaArrowUpLong } from "react-icons/fa6"

function BackToTopButton () {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 100) {
                setBackToTopButton(true)
            }   else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div>
      {backToTopButton && (
        <button style={{
            position: "fixed",
            bottom: '50px',
            right: '50px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#000',
            color: '#fff',
            opacity: '.5',
            border: '1px solid black',
            cursor: 'pointer'
        }}
        onClick={scrollUp}>
            <FaArrowUpLong size="1.5rem"/>
        </button>
      )}
    </div>
  )
}

export default BackToTopButton
