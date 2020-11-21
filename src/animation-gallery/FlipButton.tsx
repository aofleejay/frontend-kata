import React, { useState } from 'react'
import './animation.css'

const Button: React.FC<{ style?: React.CSSProperties }> = ({
  children,
  style,
}) => {
  return (
    <div
      className="absolute w-full h-full flex justify-center items-center text-white"
      style={{ backfaceVisibility: 'hidden', ...style }}
    >
      {children}
    </div>
  )
}

function FlipButton() {
  const [isDone, setIsDone] = useState(false)

  return (
    <div className="flex justify-center">
      <div
        className="relative rounded-full bg-green-400 w-24 h-10 transition-transform duration-500"
        onClick={() => setIsDone(!isDone)}
        style={{
          transformStyle: 'preserve-3d',
          transform: isDone ? 'rotateX(180deg)' : 'none',
        }}
      >
        <Button>SEND</Button>
        <Button style={{ transform: 'rotateX(180deg)' }}>DONE</Button>
      </div>
    </div>
  )
}

export default FlipButton
