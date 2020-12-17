import React from 'react'
import './animation.css'

function ShootingStar() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-green-400 h-12 rounded overflow-hidden">
      <div className="transform rotate-45">
        <div className="rounded shooting-star star-1"></div>
        <div className="rounded shooting-star star-2 m-4"></div>
        <div className="rounded shooting-star star-3 m-6"></div>
      </div>
    </div>
  )
}

export default ShootingStar
