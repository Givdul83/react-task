import React from 'react'

const NewsComponent = ({id ,img, category, title, content ,published}) => {
  return (
    <div className="container dates">
                <div className="hidden">{id}</div>
                <p className='hidden'>{published} </p>
                <img src={img}/>
                <article className="empty-box"></article>
                <p>{category}</p>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            
  )
}

export default NewsComponent