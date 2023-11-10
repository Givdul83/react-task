import React from 'react'
import './Affilates.css';
import img_rdnOne from '../../assets/images/rdn-1.svg'
import img_rdnTwo from '../../assets/images/rdn-2.svg'
import img_rdnThree from '../../assets/images/rdn-3.svg'
import img_rdnFour from '../../assets/images/rdn-4.svg'
import img_rdnFive from '../../assets/images/rdn-5.svg'

const Affiliates = () => {
  return (
    <div className="affiliates">
        <div className="container">
            <img src={img_rdnOne} className="rdn-1"/>
            <img src={img_rdnTwo}className="rdn-2"/>
            <img src={img_rdnThree} className="rdn-3"/>
            <img src={img_rdnFour} className="rdn-4"/>
            <img src={img_rdnFive} className="rdn-5"/>
          </div>
        </div>
  )
}

export default Affiliates;