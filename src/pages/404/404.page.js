import React from 'react';
import { Link } from 'react-router-dom';
import './404.page.css';



const NotFound = () => (
  <div className='container'>
    <div className='not-found'>
      <div className='content'>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  </div>
);

export default NotFound;