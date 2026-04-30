import React from 'react'

const Button = ({ content }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {content}
    </button>
  )
}

export default Button