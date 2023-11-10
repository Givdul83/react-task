import React from 'react'


const ShowcaseSection = () => {
  return (
    <div>
        <section className="showcase">
        <img className="showcase-lines" src="images\showcase-lines.svg"/>
    <div className="container">
        <div className= "content">
            <h1>We Provide The Best Business Solutions
            </h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes</p>
        
        <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
        <a className="btn-transparent" href="services.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>

        <img className='showCaseImg' src="images\showcase-image.svg" alt=" image of a man with a tablet"/>
    </div>
    </section>
    </div>
  )
}

export default ShowcaseSection