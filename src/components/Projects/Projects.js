import React from 'react'
import { Link } from 'react-router-dom';
import './projects.css';
import img_paperImage from'../../assets/images/paper-image.png'
import img_appleProducts from'../../assets/images/apple-products.png'
import img_officeStuff from'../../assets/images/office-stuff.png'
import img_laptop from'../../assets/images/laptop.png'
import Cases from './Cases';


const Projects = () => {
  return (
    <section className="projects">
        <div className="container">
    <div className="section-title">
        <p>Project & case studies</p>
        <h2>Let’s Looks Our Global Projects</h2>
    </div>
    <div className="projects-cases">
        <Cases 
                image={img_paperImage}
                alt="Man hands holding paper"
                title="Grow your business"
        />
        <Cases 
                image={img_appleProducts}
                alt="Apple products on desk"
                title="Why your client needs a responsive website"
        />
        <Cases 
                image={img_officeStuff}
                alt="Office supplies orginazed on desk"
                title="Educate your employees to get better results"
        />
        <Cases 
                image={img_laptop}
                alt="laptop on desk showing business graphs"
                title="Business Insights is a important piece of your business"
        />
        
    </div>
    <div className="btn">
    <Link to="/contacts" className="btn-black" target="_blank">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></Link>
    </div> 
 </div>   
    </section>
  )
}

export default Projects