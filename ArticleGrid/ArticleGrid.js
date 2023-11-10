import React from 'react'
import { useState,useEffect } from 'react'
import Article from './Article'
import '../ArticleGrid/articlegrid.css';
import { Link } from 'react-router-dom';

const ArticleGrid = () => {

  const [newsArticles, setNewsArticles]= useState([])

  useEffect(() => {

    async function getData() {
      const result = await fetch ("https://win23-assignment.azurewebsites.net/api/articles")
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
    <section>
      

        <div className="container-newsheadline"><h2>Our News & Articles</h2></div>
        <div className="container-grid">
      {newsArticles.map((article , index) => (
        <Link key={article.id} to={`/news/articleview/${article.id}`}>

        <Article
               
                key={index}
                author={article.author}
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
       
    </section>
  )
}

export default ArticleGrid