import React from 'react';
import './navbar.styles.css';
import { Link } from "react-router-dom";
import { Searchbar } from '../searchbar/searchbar.component';

const Navbar = ({handleChange,searchField}) => {
  // console.log('State in navbar', searchField )
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Daily Sunrise</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/science">Science</Link>
            </li>
          </ul>
          <Searchbar
            handleChange={handleChange}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;