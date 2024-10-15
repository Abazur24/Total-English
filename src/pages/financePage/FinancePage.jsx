import React from 'react';
import './financePage.scss';
import LandingPage from '../landingPage/LandingPage';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';



const FinancePage = () => {
  return (
    
    <div className='content'> 
    
      <div className='text'>
     <h1>English for Finance and Accounting</h1>
      <p className='description'>Welcome to the healthcare page!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur doloremque sint facere vitae repellendus cupiditate, error iusto, exercitationem corrupti quod dicta, amet autem eos nobis excepturi quis magni soluta ex placeat obcaecati laudantium ad. Eos, tenetur? Repellendus quo fugiat quisquam explicabo enim eligendi, vel labore laborum sequi, quae, perferendis totam!</p>
     </div>

<div className='container'>
        <img className='picture' src= "../src/assets/images/finance.jpg" alt="Finance" />
        
      <div>
         
         {/*<Link to="/LandingPage" className="contact-button"></Link>  This link leads to the page */}
         {/*<Link to='/finance' className="contact-button">Contact Our Manager</Link>*/}
         {/*<a href="/healthcare" className="contact-button">Contact Our Manager</a>*/}
         <Link to='/finance' className="contact-button" >Contact Our Manager</Link>
      </div>
      </div>

    </div>
    
  );
};

export default FinancePage;

