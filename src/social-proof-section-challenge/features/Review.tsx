import React from 'react'

interface ReviewProps {
  displayName: string
  profileImage: string
  reviewText: string
}

const Review: React.FC<ReviewProps> = (props) => {
  return (
    <article className="md:h-64 bg-pink-900 text-white rounded-lg p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={props.profileImage}
          alt={`${props.displayName} profile`}
          className="w-12 mr-4 rounded-full"
        />
        <div>
          <p className="font-bold">{props.displayName}</p>
          <p className="text-pink-400">Verified Buyer</p>
        </div>
      </div>
      <p className="font-semibold">{props.reviewText}</p>
    </article>
  )
}

export default Review
