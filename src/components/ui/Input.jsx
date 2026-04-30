import React from 'react'

const Input = ({ type = "text", placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="border border-black p-2 block mb-3"
    />
  )
}

export default Input