import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    
  return (
    <div>
        <ul>
            <li><Link to={`/products/${product.id}`}>{ product.supply }</Link></li>
        </ul>
    </div>
  )
}

export default ProductCard;