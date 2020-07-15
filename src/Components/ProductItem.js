import React from 'react';
import { useParams } from 'react-router-dom';
import MaleShoe from '../MaleShoe.json';
import '../App.css';

function ProductItem() {
    const { id } = useParams();
    
    const Maleshoe = MaleShoe[id];

    if(!Maleshoe)
    return <h2>Product Not Found!</h2>
  return (
    <div>
      <div className="prd-item">
            <h2>{Maleshoe.name}</h2>
            <img src={Maleshoe.img} height={250} alt="shoe img" />
            <h2>Price: {Maleshoe.price}</h2>
            <h2>Colors: {Maleshoe.color}</h2>
            <h3>Shipping: free Shipping</h3>
          </div>
    </div>
  );
}

export default ProductItem;