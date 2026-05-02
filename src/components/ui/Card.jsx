import React from 'react'

const Card = ({ image, title, price }) => {
  return (
    <div className='border p-4 rounded-lg w-[200px] h-[400px]'>
      <img src={image} alt={title} />
      <h3>Hey this is my {title}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Card