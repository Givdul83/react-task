import React from 'react'
import '../App.css';
import CritoAbout from '../components/About/CritoAbout';

import Affiliates from '../components/Affiliates/Affilates';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import NewsArticles from '../components/NewsArticles/NewsArticles';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import OurService from '../components/OurService/OurService';
import Projects from '../components/Projects/Projects';
import ShowCase from '../components/ShowCase/ShowCase';
import Team from '../components/Team/Team';
import Testamonial from '../components/Testamonial/Testamonial';
import WhyUs from '../components/WhyUs/WhyUs';


const Home = () => {
  return (
    <div className= "wrapper">
    <Header/>
    <ShowCase/>
    <Affiliates/>
    <Features/>
    <CritoAbout/>
    <OurService/>
    <WhyUs/>
    <Projects/>
    <Team/>
    <Testamonial/>
    <NewsArticles/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home