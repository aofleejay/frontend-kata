import React from 'react'
import Announcement from './Announcement'
import Shots from './Shots'
import Filter from './Filter'

const Home: React.FC = () => {
  return (
    <>
      <Announcement />
      <Filter />
      <Shots />
    </>
  )
}

export default Home
