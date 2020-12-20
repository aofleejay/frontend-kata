import React from 'react'
import './animation.css'

function Pacman() {
  return (
    <div className="pacman h-12 bg-green-50 rounded flex items-center relative">
      <div>
        <div className="mouth-top h-4 w-8 bg-green-500"></div>
        <div className="mouth-bottom h-4 w-8 bg-green-500"></div>
      </div>
      <div className="food absolute h-2 w-2 rounded-full bg-green-500"></div>
    </div>
  )
}

export default Pacman
