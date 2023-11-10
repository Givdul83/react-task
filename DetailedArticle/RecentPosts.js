import React from 'react'
import './recentposts.css'

const RecentPosts = ({title ,date}) => {
  return (
    <div className="posts">
    <h5>{title}</h5>
    <p>{date}</p>
    </div>
  )
}

export default RecentPosts