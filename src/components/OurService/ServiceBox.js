import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({service, title, url}) => {
  return (
    <article className= {service}>
            <div className="empty-box"></div>
            <h3>{title}</h3>
            <p>Lorem, ipsum dolor sit amet<br/> consectetur adipisicing elit. Officiis<br/> in nam possimus.</p>
            <Link to={url} className="btn-arrow" target="_blank"><i className="fa-regular fa-arrow-right"></i></Link>
            <div className="space"></div>
        </article>
  )
}

export default ServiceBox