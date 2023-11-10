import React from 'react'
import { Link } from 'react-router-dom';
import './showCase.css';
import img_showCaseImg from '../../assets/images/showcase-image.svg'
import img_showCaseLines from '../../assets/images/showcase-lines.svg'
const ShowCase = () => {
  return (
    <div> <section className="showcase">
    <img className="showcase-lines" src={img_showCaseLines}/>
<div className="container">
    <div className= "content">
        <h1>We Provide The Best Business Solutions
        </h1>
        <p>Establish your vision and value proposition and turn them into testable prototypes</p>
    
    <Link to="/" className="btn-yellow" >Get Consulting<i className="fa-regular fa-arrow-up-right"></i></Link>
    <Link to="/" className="btn-transparent" >Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
</div>

    <img className="showcase_img" src={img_showCaseImg} alt=" image of a man with a tablet"/>
</div>
</section>
    </div>
  )
}

export default ShowCase