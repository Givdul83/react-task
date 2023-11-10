import React from 'react'


const Feats =({ id, icon ,title, info }) => {
  return (
    <div> 
        <div id="hidden">{id}</div>
        <i className= {icon}></i>
        <h3>{title}</h3>
        <p>{info}</p>
        </div>
  )
}

export default Feats