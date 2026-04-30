import React from 'react'

const Badge = ({text,color})=>{
  return (
    <div className={`bg-${color}-500 text-white px-4 py-2 rounded-full text-sm font-bold`}>
      {text}
    </div>
  )
}

export default Badge