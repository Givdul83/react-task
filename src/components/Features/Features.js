import React from 'react'
import { Link } from 'react-router-dom';
import Feats from './Feats'
import './Features.css'
const Features = () => {
  return (
    <div>
         <section className="features">
        <div className="container ">
            <div className="feat-1"><p>Features</p>
                <h2>Our Accounting is trusted by thousands of companies</h2> 
                <Link to="consulting.html" className="btn-features" >Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div> 
            <div className="feats">
            <Feats 
                    id= "feat-2"
                    icon = "fa-regular fa-handshake"
                    title="Bussiness Advice"
                    info= "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                     />
             <Feats  
                    id= "feat-3"
                    icon = "fa-regular fa-lightbulb-on"
                    title="Startup Business"
                    info= "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                     />
              <Feats
                    id= "feat-4"
                    icon = "fa-light fa-chart-mixed-up-circle-dollar"
                    title="Financial Advise"
                    info= "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                     />
              <Feats
                    id= "feat-5"
                    icon = "fa-regular fa-cube"
                    title="Risk Managment"
                    info= "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                     />
        </div>
        </div>
    </section>
    </div>
  )
}

export default Features