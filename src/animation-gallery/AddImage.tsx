import React from 'react'
import './animation.css'

function AddImage() {
  return (
    <div className="add-item-container h-12 rounded overflow-hidden relative cursor-pointer">
      <div className="overlay absolute inset-0 w-full h-full flex justify-center items-center">
        <div className="plus rounded-full h-8 w-8 bg-green-500 text-white text-xs font-semibold flex justify-center items-center">
          &#xFF0B;
        </div>
      </div>
    </div>
  )
}

export default AddImage
