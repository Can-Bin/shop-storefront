import React from 'react'
import modelimg from "../../Images/model.png"
import "./style.css"

const ModelImage = () => {
  return (
    <div className='model'>
        <img src={modelimg} alt="model" />
    </div>
  )
}

export default ModelImage