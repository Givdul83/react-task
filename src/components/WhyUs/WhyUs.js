import React from 'react'
import './whyUs.css'
import img_womenTalking from '../../assets/images/women-talking.png'
import img_thumb from '../../assets/images/thumb.svg'
import img_pentagram from '../../assets/images/petagon.svg'
import img_design from '../../assets/images/design.svg'
import img_ai from'../../assets/images/ai.svg'
import WhyIcon from './WhyIcon'
const WhyUs = () => {
  return (
    <section className="why-us">
         <div className="container">
        
        <div className="grey-box"></div>
        <img className="women-talking" src={img_womenTalking} alt="two women at a desk talking"/>
    
        <div className="title-plus-icons">
    
<div className="section-title">
    <p>Why Choose Us</p>
    <h2>Why We Are The<br/> Best Business <br/>Consulting Agency</h2>
</div>
<div className="why-icons">
    <WhyIcon
            imgSrc= {img_thumb}
            title= "Process Exelence"
    />
     <WhyIcon 
            imgSrc= {img_pentagram}
            title= "Strategic Planning"
    />
     <WhyIcon
            imgSrc= {img_design}
            title= "Experience Design"
    />
     <WhyIcon
            imgSrc= {img_ai}
            title= "Artificial Inteligence"
    />
</div> 
</div>
</div>

    </section>
  )
}

export default WhyUs