import React from 'react';
import { Link } from "react-router-dom";

// Function based
export const Searchbar = ({ handleChange }) => {
  return (
    <div className="searchbar">
      {/* changing the state value of searchfield : '' to whatever the value the user tye in then running a callback funtion to update the values state */}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder='Search News here..' aria-label="Search" onChange={handleChange} />
        <Link to="/search-query">
          <button className="btn btn-outline-success">Search</button>
        </Link>
      </form>
    </div>
  );
}