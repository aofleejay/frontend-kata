import React from 'react'
import star from './images/icon-star.svg'
import imageColton from './images/image-colton.jpg'
import imageIrene from './images/image-irene.jpg'
import imageAnne from './images/image-anne.jpg'

const Rating = ({ score = 1 }: { score: number }) => {
  return (
    <>
      {[...new Array(score)].map(() => (
        <img src={star} alt="star" className="inline mr-1" />
      ))}
    </>
  )
}

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
        <article className="md:h-64 bg-pink-900 text-white rounded-lg p-6 mb-4">
          <div className="flex items-center mb-4">
            <img
              src={imageColton}
              alt="Colton Smith profile"
              className="w-12 mr-4 rounded-full"
            />
            <div>
              <p className="font-bold">Colton Smith</p>
              <p className="text-pink-400">Verified Buyer</p>
            </div>
          </div>
          <p className="font-semibold">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </article>
        <article className="md:h-64 md:mt-4 bg-pink-900 text-white rounded-lg p-6 mb-4">
          <div className="flex items-center mb-4">
            <img
              src={imageIrene}
              alt="Irene Roberts profile"
              className="w-12 mr-4 rounded-full"
            />
            <div>
              <p className="font-bold">Irene Roberts</p>
              <p className="text-pink-400">Verified Buyer</p>
            </div>
          </div>
          <p className="font-semibold">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </article>
        <article className="md:h-64 md:mt-8 bg-pink-900 text-white rounded-lg p-6 mb-4">
          <div className="flex items-center mb-4">
            <img
              src={imageAnne}
              alt="Anne Wallace profile"
              className="w-12 mr-4 rounded-full"
            />
            <div>
              <p className="font-bold">Anne Wallace</p>
              <p className="text-pink-400">Verified Buyer</p>
            </div>
          </div>
          <p className="font-semibold">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </article>
      </main>
    </div>
  )
}

export default Home
