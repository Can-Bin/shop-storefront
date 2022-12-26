import React from 'react';
import {FaAngleRight} from "react-icons/fa";
import "./style.css"

const Title = () => {
  return (
    <div className='title'>
        <p className='text'>Smarten up your work look or throw on a blazer with jeans for the weekend</p>
        <button className='btn'>
            <p className='btn-text'>SHOP NOW</p>
            <span><FaAngleRight size={20}/></span>
        </button>
    </div>
  )
}

export default Title