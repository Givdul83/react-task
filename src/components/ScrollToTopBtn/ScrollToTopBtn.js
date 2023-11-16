import React, { useEffect, useState } from 'react'
import './scrolltotopbtn.css'

const ScrollToTopBtn = () => {

  const [position, setPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll' , () =>{
        setPosition(window.scrollY)
    })
  },[])


  const scrollToTop = ( ) => {
    window.scrollTo({top: 0, behavior:'smooth' }) 
  }
  
    return (
      <div className="scroll">
      <button onClick={scrollToTop} className={`to-top ${position < 250 ? 'no-show'  : ''}`}>
      <i className="fa-solid fa-arrow-up fa-2xl"></i>
        <p>Back To Top</p>
        </button>
        </div>
  )
}

export default ScrollToTopBtn