import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Navbar() {

  return (
    <div className="container">
          <Link to="/" className="link1">Home</Link>
          <Link to="/product" className="link1">Product</Link>
    </div>
  );
}
