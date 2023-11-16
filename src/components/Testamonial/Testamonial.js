import React from 'react'
import { Link } from 'react-router-dom';
import './testamonial.css'
import img_cassandra from '../../assets/images/cassandra.svg'
import img_amanda from '../../assets/images/amanda.svg'
import img_jack from '../../assets/images/jack.svg'
import Stars from './Stars';
import Testamony from './Testamony';


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
                       <Stars/>
                       <Testamony 
                             image= {img_cassandra}
                             alt= "Image of Cassandra Warren, Business Manager at Dorfus"
                             name= "Cassandra Warren"
                             title="Business Manager, Dorfus"
                             />
                    </div>
                  
                   <div className="amanda">
                    <Stars/>
                   <Testamony 
                             image= {img_amanda}
                             alt= "Image of Amanda Tulling, Senior Developer at Square"
                             name= "Amanda Tulling"
                             title="Senior Developer, Square"
                             />
            </div>
            <div className="jack">
                <Stars/>
                <Testamony
                            image= {img_jack}
                            alt = "image of Jack McDogglas, Key Acoount manager at Gobona"
                            name= "Jack McDogglas"
                            title="Key Account Manager, Gobona"
                            />
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