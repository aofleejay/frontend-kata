import React from 'react'
import star from '../images/icon-star.svg'

interface RatingProps {
  score: number
}

const Rating: React.FC<RatingProps> = ({ score }) => {
  return (
    <>
      {[...new Array(score)].map(() => (
        <img src={star} alt="star" className="inline mr-1" />
      ))}
    </>
  )
}

Rating.defaultProps = {
  score: 1,
}

export default Rating
