import React from 'react'
import { Link } from 'react-router-dom';
import './projects.css';
import img_paperImage from'../../assets/images/paper-image.png'
import img_appleProducts from'../../assets/images/apple-products.png'
import img_officeStuff from'../../assets/images/office-stuff.png'
import img_laptop from'../../assets/images/laptop.png'

const Projects = () => {
  return (
    <section className="projects">
        <div className="container">
    <div className="section-title">
        <p>Project & case studies</p>
        <h2>Let’s Looks Our Global Projects</h2>
    </div>
    <div className="projects-cases">
        <article className="img-1">
            <img src={img_paperImage} alt="Man hands holding paper"/>
            <div>
                <h3>Grow your business</h3>
                <Link to="/#" target="_blank">Read more<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </article>
        <article className="img-2">
            <img src={img_appleProducts} alt="Apple products on desk"/>
            <div>
                <h3>Why your client needs a responsive website</h3>
                <Link to="/#" target="_blank">Read more<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </article>  
        <article className="img-3">
            <img src={img_officeStuff} alt="Office supplies orginazed on desk"/>
            <div>
                <h3>Educate your employees to get better results</h3>
                <Link to="/#" target="_blank">Read more<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </article>  
        <article className="img-4">
            <img src={img_laptop} alt="laptop on desk showing business graphs"/>
            <div>
                <h3>Business Insights is a important piece of your business</h3>
                <Link to="/#" target="_blank">Read more<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </article> 
    </div>
    <div className="btn">
    <Link to="/contacts" className="btn-black" target="_blank">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></Link>
    </div> 
 </div>   
    </section>
  )
}

export default Projects