import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const OrderDetails = (props)=>{
    let {productDetails} = props;
    return (
        productDetails.map((product,key) =>{
            let {
                productName,
                seller,
                price,
                color,
                type,
                DeliveryDate,
                DeliveryCharge,
                productImage
            } = product;
            return(
                <ProductCard 
                    key={`product_${key}`}
                    avatarName={productImage}
                    productName={productName}
                    seller={seller}
                    price={price}
                    color={color}
                    type={type}
                    DeliveryDate={DeliveryDate}
                    DeliveryFees={DeliveryCharge}
                />
            )
        })
    )
}

export default OrderDetails;
