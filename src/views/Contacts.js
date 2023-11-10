import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import ContactShow from '../components/ContactShow/ContactShow';
import ContactWays from '../components/ContactWays/ContactWays';
import FormSection from '../components/FormSection/FormSection';
import Map from '../components/Map/Map';

const Contacts = () => {
  return (
    <div className="wrapper">
    <Header/>
    <ContactShow/>  
    <ContactWays/>
    <FormSection/>
    <Map/>


    
    <div>Contacts</div>
    
    <Footer/>
    </div>
    )
}

export default Contacts