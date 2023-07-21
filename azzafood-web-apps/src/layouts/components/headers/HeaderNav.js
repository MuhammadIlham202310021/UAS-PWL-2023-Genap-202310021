import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  const naviList = [
    // { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
    { id: 1, name: "Menu", path: "/" },
    // { id: 2, name: "Order", path: "/pageorder" },
    { id: 2, name: "About", path: "/about" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top ">
        <div className="container navlist ">
          <a className="navbar-brand" href="/">
            <p>AzzaFood Restaurant</p>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="main-nav">
                <ul className="navbar-nav me-auto mb-2  mb-md-0">
                  {naviList.map((v, index) => (
                    <li className="nav-item me-1" key={index}>
                      <NavLink
                        className="nav-link text-hover-success px-3"
                        to={v.path}
                      >
                        {v.name}
                      </NavLink>
                      {/* <a
                        className="nav-link text-hover-success px-3"
                        href={v.path}
                      >
                        {v.name}
                      </a> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
