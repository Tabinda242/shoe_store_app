import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

    <div>
      <div className="sld-text"><h3>Finding Your <br /> Perfect Shoes</h3></div>
      <div className="sld-img"><img src="https://lh3.googleusercontent.com/proxy/QGiT7HCR9S-jzIRDCcmI6WJNJvRf6PU_Oq0fccgPfS8sN-oylGxB4BIrLG3trYXnToOOtIO9QNsYJGDIzdgdk014-aH4cAz0wckld09Ju7_bDEM1FZPXYHhkplgKeR64l6-MqOWvF1vGf5SJLOkC0s-Mq90cmMPVKKCFLpZ3bw" alt="sld-img" height={200} width={300}></img></div>
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
