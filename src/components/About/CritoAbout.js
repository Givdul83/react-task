import React from 'react'
import { Link } from 'react-router-dom';
import '../About/styleAbout.css'

import img_womanWalking from '../../assets/images/woman-walking.png'

const CritoAbout = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="part-1">
                <img src={img_womanWalking}/>
                <div className="ontop-boxtext"><h3>Samantha Brown,<p className="p1"> Founder</p></h3><p className="p2">"Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit."</p> </div>
            </div>
                <div className="section-title"><p>About company</p><h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <div className="lorem-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam<br/> officiis quas assumenda esse obcaecati? Ex esse error voliptates iure<br/> vel totam eos.</div>
                    <div class ="lorem-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse<br/> quasi incidunt adipisci accusantium libero provident voluptate amet.</div>
                <div className="btn-video">
                    <Link to="services" className="btn-black"  target="_blank">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                    <Link to="videos\intro-2.mp4" className="btn-intro" target="_blank"><i className="fa-regular fa-circle-play"></i><p className="intro">Intro Video</p></Link>
                </div>
                </div>
           </div>  

    </div>
  )
}

export default CritoAbout