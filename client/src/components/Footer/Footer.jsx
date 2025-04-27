import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-logo">
              <Link to="/">
                <h3>Portfolio</h3>
              </Link>
              <p>A showcase of my projects and my abilities</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} Personal Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer