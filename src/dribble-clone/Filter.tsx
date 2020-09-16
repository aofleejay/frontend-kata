/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { filters } from './mock-data'

const Filter: React.FC = () => {
  return (
    <div className="flex items-center justify-between mx-4 sm:mx-8 md:mx-20 my-8 flex-wrap lg:flex-no-wrap">
      <div className="order-1 mr-8">
        <a
          href="#"
          className="rounded-lg border border-gray-300 py-2 px-4 focus:shadow-outline whitespace-no-wrap"
        >
          <span className="text-gray-700 text-sm font-medium mr-2">
            Following
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={20}
            height={20}
            className="inline-block text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="w-full mt-4 lg:mt-0 border-t lg:border-none pt-2 lg:pt-0 text-center whitespace-no-wrap overflow-x-scroll order-3 lg:order-2">
        {filters.map((filter) => (
          <a
            href="#"
            key={filter}
            className="mr-6 text-gray-700 text-sm font-medium"
          >
            {filter}
          </a>
        ))}
      </div>
      <div className="order-2 lg:order-3 ml-8">
        <a
          href="#"
          className="rounded-lg border border-gray-300 py-2 px-4 focus:shadow-outline whitespace-no-wrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="img"
            className="text-gray-400 inline-block mr-4"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"
            ></path>
          </svg>
          <span className="text-gray-700 text-sm font-medium">Filters</span>
        </a>
      </div>
    </div>
  )
}

export default Filter
