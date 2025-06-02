import React from 'react';
import './NotFound.css'; 
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { apiRequiest } from '../../utilities/ApiCall';
import { useState } from 'react';


const NotFound = () => {
  
  return (
    <div className="notfound-container-page">
      <img src={'NotFoundImage'} alt="404 Not Found" 
      className="notfound-image" />
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link  to ='/'><button className="home-button">Go Home</button></Link>
    </div>
  );
};

export default NotFound;
