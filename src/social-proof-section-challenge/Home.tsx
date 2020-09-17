import React from 'react'
import Rating from './features/Rating'
import Review from './features/Review'
import { reviews } from './mock-data'

const Home = () => {
  return (
    <div className="mt-16 md:mt-24 mx-4 sm:mx-16 md:mx-20 xl:mx-40">
      <header className="flex flex-col md:flex-row">
        <div className="text-center md:w-1/2 md:text-left md:pr-24">
          <p className="font-bold md:font-extrabold text-3xl md:text-5xl leading-8 md:leading-tight text-pink-900 mb-4">
            10,000+ of our users love our products.
          </p>
          <p className="text-gray-700 text-sm mb-8">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="md:flex md:flex-col md:w-1/2">
          <div className="md:flex md:items-center md:self-start text-center rounded-lg p-4 bg-purple-100 mb-4 md:max-w-md">
            <div className="mb-2 md:px-4 md:flex-shrink-0">
              <Rating score={5} />
            </div>
            <p className="text-pink-900 text-sm font-bold tracking-wide">
              Rated 5 Stars in Reviews
            </p>
          </div>
          <div className="md:flex md:items-center md:self-center text-center rounded-lg p-4 bg-purple-100 mb-4 md:max-w-md">
            <div className="mb-2 md:px-4 md:flex-shrink-0">
              <Rating score={5} />
            </div>
            <p className="text-pink-900 text-sm font-bold tracking-wide">
              Rated 5 Stars in Report Guru
            </p>
          </div>
          <div className="md:flex md:items-center md:self-end text-center rounded-lg p-4 bg-purple-100 mb-4 md:max-w-md">
            <div className="mb-2 md:px-4 md:flex-shrink-0">
              <Rating score={5} />
            </div>
            <p className="text-pink-900 text-sm font-bold tracking-wide">
              Rated 5 Stars in BestTech
            </p>
          </div>
        </div>
      </header>
      <main className="md:grid md:grid-cols-3 md:gap-4 mt-4 md:mt-8">
        {reviews.map(({ id, user, text }, i) => (
          <div key={id} className={`md:mt-${i * 4}`}>
            <Review
              displayName={user.displayName}
              profileImage={user.image}
              reviewText={text}
            />
          </div>
        ))}
      </main>
    </div>
  )
}

export default Home
