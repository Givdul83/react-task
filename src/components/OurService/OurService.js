import React from 'react'
import { Link } from 'react-router-dom';
import './OurService.css'
import img_floatingLines from '../../assets/images/floating-lines.svg'
import ServiceBox from './ServiceBox'

const OurService = () => {
  return (
    <div className="our-service">
      <img className="floating-lines" src={img_floatingLines}/>
   <div className="container">
    <div className="section-title">
        <p>Our Services</p>
        <h2>We Provide The Best<br/> Service For Consulting</h2>    
    </div>
    <div className="diff-service">
       
        <ServiceBox
                    className= "advice"
                    title="Business Advice"
                    url = "business.html"
       />
       <ServiceBox 
                    className="startup"
                    title= "Startup Business"
                    url="startup.html"
        />
        <ServiceBox
                    className="finacial"
                    title= "Financial Advice"
                    url="advice.html"
        />
        <ServiceBox
                    className="risk"
                    title= "Risk Managment"
                    url="risk.html"
        />
    </div>
   <div className="btn-pos"> <Link to="Services" className="btn-transparent" target="_blank">Browse Services <i className="fa-regular fa-arrow-up-right"></i></Link></div>

</div>

        
    </div>
  )
}

export default OurService