import React from 'react'
import { Link } from 'react-router-dom';
import '../ContactWays/contactways.css';

const ContactWays = () => {
  return (
    <section className="contact-ways">
            <div className="container">
                <article className="visit">
                    <Link to="https://www.google.se/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.336637,18.0594356,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttu" className="btn-black"><i className="fa-solid fa-location-dot"></i></Link>
                    <h3>Visit Us</h3>
                    <p className="line-1">Sveavägen 31</p>
                    <p className="line-2">111 34 STOCKHOLM</p>
                </article>
                <article className="call">
                    <Link to="tel:+46 (8) 121 470 50" className="btn-black"><i className="fa-sharp fa-solid fa-phone"></i></Link>
                    <h3>Call Us</h3>
                    <Link to="tel:+46 (8) 121 470 50" className="phone-1">+46 (8) 121 470 50</Link>
                    <Link to="tel:+46 (8) 121 470 50" className="phone-2">+46 (8) 121 470 51</Link>
                </article>
                <article className="mail">
                    <Link to="mailto:info@crito.com" className="btn-black"><i className="fa-sharp fa-regular fa-envelope"></i></Link>
                    <h3>Email Us</h3>
                    <Link to="mailto:info@crito.com" className="mail">info@crito.com</Link><br/>
                    <Link to="mailto:support@crito.com" className="support" >support@crito.com</Link>
                </article>
            </div>
        </section>
  )
}

export default ContactWays