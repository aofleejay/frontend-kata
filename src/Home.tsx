import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="text-center pt-8 bg-gray-100 w-screen h-screen">
      <h1 className="text-2xl font-extrabold text-gray-900">
        FRONTEND <span className="text-indigo-500">KATA</span>
      </h1>
      <p className="text-gray-700">
        My frontend kata. (
        <a
          href="https://github.com/aofleejay/frontend-kata"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          view source
        </a>
        )
      </p>
      <ul className="mt-8">
        <li className="text-indigo-400 hover:text-indigo-600 transition-colors duration-200 ease-in underline">
          <Link to="/dribble-clone">Dribble's homepage clone</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
