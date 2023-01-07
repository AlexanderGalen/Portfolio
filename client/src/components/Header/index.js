import React from 'react'
import Navigation from "../Navigation";
import "./style.css";

export default function Header() {
  return (
    <div className="header row p-2 ">
      <div className="title col-6 p-2 m-0">
        <h1 className="p-0 ps-4 m-0 text-white">Alexander Galen Carr</h1>
      </div>
      <Navigation />
    </div>
    
  )
}
