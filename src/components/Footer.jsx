import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <p className="mb-0">
            Copyright © <a href="http://www.devcrud.com">DevCRUD</a>{" "}
            Distribution <a href="https://themewagon.com">ThemeWagon</a>
          </p>
          <div className="social-links text-right m-auto ml-sm-auto">
            <Link to="#" className="link">
              <i className="ti-facebook" />
            </Link>
            <Link to="#" className="link">
              <i className="ti-twitter-alt" />
            </Link>
            <Link to="#" className="link">
              <i className="ti-google" />
            </Link>
            <Link to="#" className="link">
              <i className="ti-pinterest-alt" />
            </Link>
            <Link to="#" className="link">
              <i className="ti-instagram" />
            </Link>
            <Link to="#" className="link">
              <i className="ti-rss" />
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
