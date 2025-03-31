import React, { JSX } from 'react'
import '../css/Navbar.css'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="nav">
        <div className="nav-left">
            <span className='logo'>Rinaldi</span>
        </div>
        <div className="nav-menu">
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Education</li>
            <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar