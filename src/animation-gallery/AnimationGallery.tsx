import React from 'react'
import DotLoading from './DotLoading'

const componentList = [DotLoading]

function AnimationGallery() {
  return (
    <div className="min-h-screen bg-green-200 bg-gradient-to-b from-green-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4 p-8">
          {componentList.map((Component) => (
            <div className="p-8 shadow-lg rounded text-center cursor-pointer bg-white">
              <p className="text-lg font-semibold mb-4">{Component.name}</p>
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimationGallery
