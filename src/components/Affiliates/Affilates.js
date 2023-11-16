import React from 'react'
import './Affilates.css';
import './AffiliateLogo';
import img_rdnOne from '../../assets/images/rdn-1.svg'
import img_rdnTwo from '../../assets/images/rdn-2.svg'
import img_rdnThree from '../../assets/images/rdn-3.svg'
import img_rdnFour from '../../assets/images/rdn-4.svg'
import img_rdnFive from '../../assets/images/rdn-5.svg'
import AffiliateLogo from './AffiliateLogo';

const Affiliates = () => {
  return (
    <div className="affiliates">
        <div className="container">
            <AffiliateLogo 
                          image= {img_rdnOne}
                          />
            <AffiliateLogo
                          image= {img_rdnTwo}
                          />
            <AffiliateLogo
                          image= {img_rdnThree}
                          />
            <AffiliateLogo
                          image= {img_rdnFour}
                          />              
            <AffiliateLogo
                          image= {img_rdnFive}
                          />
          </div>
        </div>
  )
}

export default Affiliates;