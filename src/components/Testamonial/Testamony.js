import React from 'react'

const Testamony = ({image, alt, name, title}) => {
  return (
    <div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati<br/> cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="mini-grid">
                <img src={image} alt={alt}/>
                <h3>{name}</h3>
                <p>{title}</p>
                </div>
    </div>
  )
}

export default Testamony