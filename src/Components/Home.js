import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

    <div>
      <div className="sld-text"><h3>Finding Your <br /> Perfect Shoes</h3></div>
      <div className="sld-img"><img src="https://pmcfootwearnews.files.wordpress.com/2016/07/vans-italian-textiles-woven-sneakers-pack.jpg" alt="sld-img" height={200} width={300}></img></div>
    </div>
      
      <div className="home-img1">
        
        <Link to="/product">
          <h2>Male Shoes</h2>
          <img src="https://sneakers-magazine.com/wp-content/uploads/2019/12/vans-mismatch-pack-mood-1.jpg" height={200} alt="shoe-img" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
