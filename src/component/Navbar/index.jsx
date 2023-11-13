import React from "react";
import "../Navbar/style.css";
import logo from "../../assets/img/logo.jpg";

const Navbar = () => {
  return (
    <div id="navbardg">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container bg-blue-light ">
          <a className="navbar-brand" href="/">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler border-0 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header pt-4">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body fw-bold">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#our-services">
                    Our Services
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#FAQ">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
