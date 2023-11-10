import React from 'react'
import { Link } from 'react-router-dom';
import './showcasebase.css'


import img_fullLines from '../../assets/images/showcase-lines.svg';

const ShowCaseBase = ({url , pagename, title}) => {
  return (
    <section className="first-section">
    <img className="lines" src={img_fullLines}/>
    <div className="container">
        <div className="link-part">
            <Link to="/" alt="link to homepage"> Home</Link>
            <Link to={url} alt="link to contactspage"> {pagename}</Link>
        </div>
            <h1>{title}</h1>  
    </div>
</section>
  )
}

export default ShowCaseBase