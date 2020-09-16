import React from 'react'
import { shots } from './mock-data'

const Shots: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 sm:mx-8 md:mx-20 mb-8">
      {shots.map((shot) => (
        <div key={shot.id}>
          <img
            src={shot.image}
            alt={shot.displayName}
            className="rounded-lg mb-3 w-full object-cover object-center"
          />
          <div className="flex justify-between text-xs text-gray-600">
            <div className="flex items-center">
              <img
                src={shot.displayImage}
                alt={shot.displayName}
                className="rounded-full mr-2 cursor-pointer"
              />
              <p className="font-bold mr-2 text-gray-900 cursor-pointer">
                {shot.displayName}
              </p>
              <span className="uppercase rounded px-1 cursor-pointer bg-gray-400 hover:bg-pink-600 text-xs text-white font-extrabold tracking-tighter">
                team
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 15"
                role="img"
                className="icon fill-current shot-tools-icon cursor-pointer hover:text-pink-600"
              >
                <path d="M8.75 0.5H5.25C2.35025 0.5 0 2.85025 0 5.75C0 8.24783 1.74592 10.3344 4.08333 10.8652V14.5L8.16667 11H8.75C11.6497 11 14 8.64975 14 5.75C14 2.85025 11.6497 0.5 8.75 0.5Z"></path>
              </svg>
              <p className="ml-1">{shot.totalLike}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                role="img"
                className="icon fill-current shot-tools-icon ml-2 cursor-pointer hover:text-pink-600"
              >
                <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>
              </svg>
              <p className="ml-1">{shot.totalComment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shots
