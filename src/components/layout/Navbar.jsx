import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fw-bold">MyPortfolio</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item mx-1">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded ${isActive ? 'active bg-primary' : ''}`
                }
                to="/"
                end
              >
                <i className="fas fa-home me-1"></i> Home
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded ${isActive ? 'active bg-primary' : ''}`
                }
                to="/about"
              >
                <i className="fas fa-user me-1"></i> About
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded ${isActive ? 'active bg-primary' : ''}`
                }
                to="/projects"
              >
                <i className="fas fa-code me-1"></i> Projects
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded ${isActive ? 'active bg-primary' : ''}`
                }
                to="/contact"
              >
                <i className="fas fa-envelope me-1"></i> Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Dark Mode Toggle */}
          <div className="d-flex align-items-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;