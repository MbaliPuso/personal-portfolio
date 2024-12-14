import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
        <div className="container">
          <Link className="logo" to="#">
            Meyawo
          </Link>
          <ul className="nav">
            <li className="item">
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="item">
              <a className="link" href="#testmonial">
                Testmonial
              </a>
            </li>
            <li className="item">
              <a className="link" href="#blog">
                Blog
              </a>
            </li>
            <li className="item">
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
            {/* <li className="item ml-md-3">
              <a href="components.html" className="btn btn-primary">
                Components
              </a>
            </li> */}
          </ul>
          <Link
            to="#"
            id="nav-toggle"
            className="hamburger hamburger--elastic"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header