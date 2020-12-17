import React from 'react'
import { Link } from 'react-router-dom'

const ListItem: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <li
      className={`text-green-500 hover:text-green-600 font-semibold transition-colors duration-200 ease-in underline ${className}`}
    >
      {children}
    </li>
  )
}

const Home: React.FC = () => {
  return (
    <div className="pt-8 bg-gray-100 w-screen h-screen">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          FRONTEND <span className="text-green-500">KATA</span>
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
        <ol className="mt-8 list-disc list-inside">
          <ListItem className="mb-4">
            <Link to="/animation-kata">Animation kata</Link>
          </ListItem>
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
        </ol>
      </div>
    </div>
  )
}

export default Home
