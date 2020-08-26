import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className='navbar navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
      <div className='container'>
        <a href='#' className='navbar-brand text-light font-weight-bold hName'>
          Pauli 🌌
         </a>
        <div className='collapse navbar-collapse text-center' id='collapsenavbar'>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/mahir_portfolio_react/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mahir_portfolio_react/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mahir_portfolio_react/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mahir_portfolio_react/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
