import React from 'react'

const Announcement: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      <p className="text-sm tracking-tight font-medium text-center text-white py-3 px-10 sm:px-20">
        <span className="font-bold">Looking for freelance projects?</span> Our
        <span className="italic">Pro Business</span> subscription now gives you
        access to our exclusive freelance projects board.{' '}
        <span className="font-bold cursor-pointer text-pink-600 hover:text-pink-300">
          Learn more
        </span>
        .
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        role="img"
        className="absolute right-0 top-0 mt-4 mr-4 w-4 h-4 icon icon-16 text-gray-600 fill-current cursor-pointer hover:text-gray-900 hover:bg-gray-500 rounded-full"
      >
        <path d="m14.828 12 4.586-4.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0l-4.586 4.586-4.586-4.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l4.586 4.586-4.586 4.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l4.586-4.586 4.586 4.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828z"></path>
      </svg>
    </div>
  )
}

export default Announcement
