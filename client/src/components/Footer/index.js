import React from 'react'
import "./style.css";

export default function Footer() {
  return (
    <div className="footer fixed-bottom">
      <div className="socials p-2 text-white row text-center">
        <div className="col-6">
          <a className="h6 fw-bold" target="_blank" href="https://www.linkedin.com/in/alexandergalencarr/">LinkedIn</a>
        </div>
        <div className="col-6">
          <a className="h6 fw-bold" target="_blank" href="https://github.com/AlexanderGalen/">Github</a>
        </div>
      </div>
    </div>
  );
}
