import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import ProductItem from './Components/ProductItem';


function RouteConfig() {

  return (
	<div>
        <Router>
        
            <Routes>
                <Route exact path="/" component={<Home />}/>
                <Route path="/about" component={<About />}/>
                <Route path="/product/:id" component={<ProductItem />}/>
            </Routes>
        </Router>
	</div>
  );
}

export default RouteConfig;
