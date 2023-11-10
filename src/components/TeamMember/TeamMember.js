import React from 'react'

const TeamMember = ({ imgName, alt, title, position}) => {
  return (
    <article>
            <img src={imgName} alt={alt}/>
            <h3>{title}</h3>
            <p>{position}</p>
        </article>
  )
}

export default TeamMember