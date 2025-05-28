import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              <h2>Portfolio</h2>
            </Link>
          </div>

          <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
            <nav className="menu">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                Portfolio
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </nav>
          </div>

          <div className="header-right">
              <a href="http://127.0.0.1:3000/resume" className="btn btn-primary" download="dkundrats_resume.pdf">Download CV</a>
              <div className="mobile-menu-btn" onClick={toggleMenu}>
              <span className={isMenuOpen ? 'active' : ''}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
