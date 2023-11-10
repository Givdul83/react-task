import React  from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import ArticleShowCase from '../components/ArticleShowCase/ArticleShowCase';
import NewsArticles from '../components/NewsArticles/NewsArticles';
import '../../src/index.css'
import DetailedArticle from '../components/DetailedArticle/DetailedArticle';

const ArticleView = () => {

  

  


  return (
    <div className="wrapper">
    <Header/>
    <ArticleShowCase/>
    
    <DetailedArticle/>
    <NewsArticles className="news-articles-background" />
    
    <Footer/>
    </div>
    )
}

export default ArticleView