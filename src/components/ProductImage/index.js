import React from 'react'
import bag from "../../Images/bag.png"
import "./style.css"

const ProductImage = () => {
  return (
    <div className='product'>
        <div className='price-img-section'>
            <div className='price'>
                <p className='text-sec'>Saffiano leather bag 2005</p>
                <p>€199.95</p>
            </div>
            <div className='product-img'>
                <img src={bag} alt="bag" />
            </div>
        </div>
    </div>
  )
}

export default ProductImage