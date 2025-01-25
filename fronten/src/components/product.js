// src/ProductCard.js
import React from 'react';
import './ProductCard.css';
import { FaShoppingCart } from 'react-icons/fa';
import ProductOne from '../images/productuno.jpg'
import Header from './Header';


const ProductCard = ({ product }) => {
  return (
< >

  <div className='container'>
        <div className="product-card">
      <div className="image-container">
        <img src={product.photo} alt={product} className="product-image" />
      </div>
      <div className="details">
        <p className="description">{product.name}</p>
        <div className="price-cart">
          <span className="price">${product.price}</span>
          <FaShoppingCart className="cart-icon" />
        </div>
      </div>
    </div>
    </div>

   
    </>
  );
};

export default ProductCard;
