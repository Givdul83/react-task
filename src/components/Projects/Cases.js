import React from 'react'
import { Link } from 'react-router-dom'

const Cases = ({ image ,title,alt}) => {
  return (
    <article>
            <img src={image} alt={alt}/>
            <div>
                <h3>{title}</h3>
                <Link to="/#" target="_blank">Read more<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </article>
  );
};

export default Cases