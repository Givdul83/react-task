import React from 'react'
import './newsArticles.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Article from '../ArticleGrid/Article';



const NewsArticles = ({className}) => {

    const [newsArticles, setNewsArticles]= useState([])

    useEffect(() => {

        
  
      async function getData() {
        const amount = 3;
        const result = await fetch (`https://win23-assignment.azurewebsites.net/api/articles?take=${amount}`)
        const data= await result.json()
  
        console.log(data);
        
        
         
  
         const listArticles = data.map(item => ({
            author: item.author,
            category: item.category,
            content: item.content,
            id: item.id,
            imageUrl: item.imageUrl,
            published: item.published,
            title: item.title,
         }));
         setNewsArticles(listArticles);
      }
    
         getData();
    }, []);
        


  return (
    <section className={`${className}`}>
            <div className="container one">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                    <Link to='/news' className="btn-transparent">Browse Articles <i className="fa-solid fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="container dates">
            {newsArticles.map((article , index) => (
        <Link key={article.id} target='_blank' to={`/news/articleview/${article.id}`}>

        <Article
               
                key={index}
                category={article.category}
                content={article.content}
                id= {article.id}
                imageUrl={article.imageUrl}
                published={article.published}
                title={article.title}
                />
                </Link>
            ))}
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