import React from 'react'
import { Link } from 'react-router-dom'

const Layout: React.FC = ({ children }) => (
  <div className="flex">
    <nav className="bg-gray-800 text-gray-200 h-screen p-6">
      <ul>
        <li className="p-1">
          <Link to="/" className="uppercase font-bold">
            home
          </Link>
        </li>
        <li className="p-1">
          <Link to="/kata-1">Kata-1</Link>
        </li>
        <li className="p-1">
          <Link to="/kata-1">Kata-2</Link>
        </li>
      </ul>
    </nav>
    <main className="flex-1">{children}</main>
  </div>
)

export default Layout
