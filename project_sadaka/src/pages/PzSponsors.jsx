import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Impect from '../components/Impect';
import { Sponser } from '../components/Sponsor';

const PzSponsors = () => {
    return (
        <>
       <Navbar/>
       

        
       
      
          <div className="container">
            <Impect/>
           
        <Sponser/>
        <Footer/>
        </div>
      </>
      
    );
};

export default PzSponsors;