import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = ({ product }) => {
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product?.category || 'Loading...'} <img src={arrow_icon} alt="" /> {product?.name || 'Loading...'}
    </div>
  )
}

export default Breadcrums