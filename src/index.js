import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter , Route, Routes, Outlet} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import ArticleView from './views/ArticleView';
import AutoToTop from './components/AutoToTop';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AutoToTop/>
    <ScrollToTopBtn/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/contacts' element={<Contacts />} />
        <Route path= '/news' element={<News />} />
        <Route path= '/news/articleview/:id' element ={<ArticleView/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

