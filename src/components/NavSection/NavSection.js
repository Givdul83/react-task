import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './NavSection.css';
import img_logo from '../../assets/images/Logo.svg'

const NavSection = () => {
  return (
    <div className="headNav">
     <div className="container">
        <Link to="/" className="logo"><img src={img_logo} alt="Crito logotype"/></Link>
        <Link to="contacts" className="menu-bars"> <i className= " fa-solid fa-bars-staggered"></i></Link>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-info">
                    <div className="content-box">
                        <i className="fa-regular fa-phone-volume"></i>
                        <Link to="tel:+46 (8) 121 470 50" >+46(8) 121 470 50</Link>
                     </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        <Link to="mailto:info@crito.com"> info@crito.com</Link>
                    </div>
                    <div className="content-box right">
                        <i className="fa-regular fa-location-dot"></i>
                        Sveavägen 31, 111 34 Stockholm
                    </div>
                </div>
             
                <div className="social-media">
                    <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                  
                    <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link>

                    <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>

                    <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
            
        <div className="main-menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
                <Link to= "login" className="btn-yellow">Login<i className="fa-regular fa-arrow-up-right"></i></Link>
                
        
        </div>
        </div>
        </div>
    </div>
  )
}

export default NavSection ;