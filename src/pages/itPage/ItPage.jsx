import React from 'react';
import './itPage.scss';
import LandingPage from '../landingPage/LandingPage';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const ItPage = () => {
  return (
    
    <div className='content'> 
    
      <div className='text'>
     <h1>English for Healthcare Professionals</h1>
      <p className='description'>Welcome to the healthcare page!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur doloremque sint facere vitae repellendus cupiditate, error iusto, exercitationem corrupti quod dicta, amet autem eos nobis excepturi quis magni soluta ex placeat obcaecati laudantium ad. Eos, tenetur? Repellendus quo fugiat quisquam explicabo enim eligendi, vel labore laborum sequi, quae, perferendis totam!</p>
     </div>

<div className='container'>
        <img className='picture' src= "../src/assets/images/itprofessionals.png" alt="it people" />
      <div>

         <Link to='/it' className="contact-button" >Contact Our Manager</Link>
      </div>
      </div>

    </div>
    
  );
};

export default ItPage;