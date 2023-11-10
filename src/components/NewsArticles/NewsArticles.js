import React from 'react'
import './newsArticles.css'
import { Link } from 'react-router-dom';

import img_classroom from '../../assets/images/classroom.png'
import img_chat from '../../assets/images/chat.png'
import img_books from '../../assets/images/books.png'


const NewsArticles = ({className}) => {
  return (
    <section className={`${className}`}>
            <div className="container one">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                    <Link to='/news' target="_blank" className="btn-transparent">Browse Articles <i className="fa-solid fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="container dates">
                <div className="date-1">
                <img className="25" src={img_classroom}/>
                <article className="empty-box"></article>
                <p>Buisness</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div className="date-2">
                <img className="17" src={img_chat}/>
                <article className="empty-box"></article>
                <p>Buisness</p>
                <h3>How To Implement Chat GPT<br/> In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div className="date-3">
                <img className="13" src={img_books}/>
                <article className="empty-box"></article>
                <p>Buisness</p>
                <h3>The Guide To Support Modern<br/> CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
             </div>
            </div>
             <div className="container dots">
                <i className="fa-regular fa-wifi-weak"id="darkdot"></i>
                <i className="fa-regular fa-wifi-weak" ></i>
                <i className="fa-regular fa-wifi-weak"></i>
                <i className="fa-regular fa-wifi-weak"></i>
                <i className="fa-regular fa-wifi-weak"></i>
            </div>
        </section>

  )
}

export default NewsArticles