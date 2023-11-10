import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import ArticleShowCase from '../components/ArticleShowCase/ArticleShowCase';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import ArticleGrid from '../components/ArticleGrid/ArticleGrid';

const News = () => {
  return (
    <div className="wrapper">
    <Header/>
    <ArticleShowCase/>
    <ArticleGrid/>
    
    <NewsLetter/>
    <Footer/>
    </div>
    )
}

export default News