import React from 'react'
import './categories.css'

const Categories = ({title, count}) => {
  return (
    <div className="categorycount">
        <h5>{title}</h5>
        <p> - </p>
        <p>{count}</p>
        <p>Posts</p>
    </div>
  )
}

export default Categories