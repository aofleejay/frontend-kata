import React from 'react'
import { Link } from 'react-router-dom'

const ListItem: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <li
      className={`text-indigo-400 hover:text-indigo-600 transition-colors duration-200 ease-in underline ${className}`}
    >
      {children}
    </li>
  )
}

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
          view source code on GitHub
        </a>
        )
      </p>
      <ol className="mt-8 max-w-xl mx-auto list-disc list-inside">
        <ListItem>
          <Link to="/dribble-clone">Dribble's homepage clone</Link>
        </ListItem>
        <ListItem>
          <Link to="/social-proof-section-challenge">
            Social proof section challenge
          </Link>{' '}
          (
          <a
            href="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA"
            target="_blank"
            rel="noopener noreferrer"
          >
            View challenge
          </a>
          )
        </ListItem>
        <ListItem className="mt-4">
          <Link to="/animation-kata">Animation kata</Link>
        </ListItem>
      </ol>
    </div>
  )
}

export default Home
