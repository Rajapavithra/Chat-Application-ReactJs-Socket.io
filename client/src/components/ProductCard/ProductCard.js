import React from 'react';
import Avatar from '../Avatar/Avatar'

import './ProductCard.css';

const ProductCard = (props)=>{
    let {
        productName,
        seller,
        price,
        color,
        type,
        DeliveryDate,
        DeliveryFees,
        avatarName
    } = props;
    return (
      <div className='productCard'>
          <span>
              <Avatar name={avatarName} className='productAvatar'/>
          </span>
          <span className='details'>
                <label>{productName}</label> <br/>
                <span>
                <label>{type}</label> | <label>{color}</label><br/>
                </span>
                <label className='bold'>Seller : </label><label>{seller}</label><br/>
                <label className='bold'>Price : </label><label> &#8377;{price}</label>
          </span>
          <span className='deliveryDetails'>
              <label>Expected Delivery By:</label>
           <span>
                <label>{DeliveryDate}</label> | <label>&#8377;{DeliveryFees}</label>
               </span> 
          </span>

      </div>
    )
}

export default ProductCard;