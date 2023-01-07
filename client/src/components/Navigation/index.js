import React from 'react'
import {NavLink} from "react-router-dom";
import "./style.css";

export default function Navigation() {

  return (
    <nav className="navigation col-6 align-items-center">
      <div className="row p-0 pt-2 m-0 text-center">
        <h5 className="col-3 text-white">
          <NavLink activeClassName="selected" to="/about">About Me</NavLink>
        </h5>
        <h5 className="col-3 text-white">
          <NavLink activeClassName="selected" to="/portfolio">Portfolio</NavLink>
        </h5>
        <h5 className="col-3 text-white">
          <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
        </h5>
        <h5 className="col-3 text-white">
          <NavLink activeClassName="selected" to="/resume">Resume</NavLink>
        </h5>
      </div>
    </nav>
  )
}
