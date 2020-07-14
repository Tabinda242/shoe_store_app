import React from 'react';
import MaleShoe from '../MaleShoe.json';
import {Link} from 'react-router-dom';
import '../App.css';

function Product() {

  return (
    <div>
      <div className="prd-container">
        {Object.keys(MaleShoe).map(keyName => {
          return (<Link key={keyName} className="box" to={`/product/${keyName}`} alt="shoePic">
            <h3>{MaleShoe[keyName].name}</h3>
            <img src={MaleShoe[keyName].img} height={150} alt="shoeImg"/>
          </Link>)
        })}
      </div>
    </div>
  );
}

export default Product;
