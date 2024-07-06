import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import Breadcrumbs from '../Breadcrums/Breadcrums.jsx';


const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;

  if (!product) {
    return null; // Or some loading state
  }

  return (
    <div className='product-display'>
      <Breadcrumbs product={product} />
      <div className='product-display-left'>
        <div className="product-display-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className='product-display-right'>
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>{122}</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">${product.old_price}</div>
          <div className="product-display-right-price-new">${product.new_price}</div>
        </div>
        <div className="product-display-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cupiditate.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="product-display-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
        <p className="product-display-right-category"><span>Tags: </span>Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
