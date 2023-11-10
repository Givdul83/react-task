import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import img_darkLogo from '../../assets/images/Logo-dark.svg'
import img_darkLines from '../../assets/images/black-lines.svg'

const Footer = () => {
  return (
    <footer>
    <section className="footer-1">
    <div className="container">
        <article className="logo-text">
        <Link to="/" target="_blank"><img src={img_darkLogo}  className="logo" alt="Crito logotype"/></Link> 
        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Placeat obcaecati voluptas<br/> voluptates! Voluptates laborum nam<br/> ratione minus necessitatibus, iure<br/> praesentium.</p>
        </article>
        <article className="company">
            <h3>Company</h3>
            <nav>
                <Link to="/" target="_blank" className="inside">About</Link>
                <Link to="/contacts" target="_blank" className="inside">Features</Link>
                <Link to="/contacts"  target="_blank" className="inside">Works</Link>
                <Link to="/contacts" target="_blank" className="inside">Career</Link>
            </nav>
        </article>
        <article className="help">
            <h3>Help</h3>
            <nav>
                <Link to="/" target="_blank" className="inside">Support</Link>
                <Link to="/" target="_blank" className="inside">Delivery Details</Link>
                <Link to="/contacts" target="_blank" className="inside"> Terms & Conditions</Link>
                <Link to="/contacts" target="_blank" className="inside">Privacy Policy</Link>
               
            </nav>
        </article>
        <article className="resources">
            <h3>Resources</h3>
            <nav>
                <Link to="/" target="_blank" className="inside">Free eBooks</Link>
                <Link to="/"target="_blank" className="inside">Development Tutorial</Link>
                <Link to="/contacts" target="_blank" className="inside">How to -blog</Link>
                <Link to="https://youtube.com" className="inside" target="_blank">You-tube Playlist</Link>
            </nav>
        </article>
        <article className="links">
            <h3>Link</h3>
            <nav>
                <Link to="/" target="_blank" className="inside">Free eBooks</Link>
                <Link to="índex.html" target="_blank"  className="inside">Development Tutorial</Link>
                <Link to="/contacts" target="_blank" className="inside">How to -blog</Link>
                <Link to="https://youtube.com" className="inside" target="_blank">You-tube Playlist</Link>
            </nav>
        </article>
    </div>
        <img className="lines" src={img_darkLines}/>
</section>
    <div className="border">  
    </div>
    <section className="container bottom">
       <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
       <div className="social-media">
        <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
      
        <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link>

        <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>

        <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
    </div>
    </section>

</footer>
  )
}

export default Footer