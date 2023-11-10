import React from 'react'
import { Link } from 'react-router-dom';
import './testamonial.css'
import img_cassandra from '../../assets/images/cassandra.svg'
import img_amanda from '../../assets/images/amanda.svg'
import img_jack from '../../assets/images/jack.svg'

const Testamonial = () => {
  return (
    <section className="testamonial">
         <div className="container one">
                <div className="section-title">
                    <p>Testamonial</p>
                    <h2>What Our Client Says</h2>
                   </div>
                   <div className="container two">
                    <div className="cassandra">
                        <div className="stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati<br/> cum saepe nesciunt nemo eligendi numquam voluptate"</p>

                    <div className="mini-grid">
                        <img src={img_cassandra} alt="image of Cassandra Warren, Business Manager, Dorfus"/>
                        <h3>Cassandra Warren</h3>
                        <p>Business Manager, Dorfus</p>
                    </div>
                    </div>
                  
                   <div className="amanda">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati<br/> cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="mini-grid">
                    <img src={img_amanda} alt="image of Amanda Tulling, Senior Developer, Square"/>
                    <h3>Amanda Tulling</h3>
                    <p>Senior Developer, Square</p>
                </div>
            </div>
            <div className="jack">
                <div className="stars">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati<br/> cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="mini-grid">
                <img src={img_jack} alt="image of Jack McDogglas,Key Account Manager, Gobona"/>
                <h3>Jack McDogglas</h3>
                <p>Key Account Manager, Gobona</p>
                </div>
            </div>
         </div>
         <div className="btn">
            <Link to="/reviews" target="_blank" className="btn-black">All Reivews<i className="fa-regular fa-arrow-up-right"></i></Link >
            </div> 
     </div>
        <div className="gap">
         </div>

    </section>
  )
}

export default Testamonial