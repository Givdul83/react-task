import React from 'react'

const WhyIcon = ({ imgSrc , title}) => {
  return (
    <div className="whybox">
        <img src={imgSrc}/>
         <h3>{title}</h3>
         <p>Lorem, ipsum dolor sit amet consectetur</p>
    </div>
  )
}

export default WhyIcon