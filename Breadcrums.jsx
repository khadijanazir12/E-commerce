import React from 'react';
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumbs = (props) => {
  const { product } = props;

  if (!product || !product.category || !product.name) {
    return null;
  }

  return (
    <div className='breadcrumb'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrumbs;
