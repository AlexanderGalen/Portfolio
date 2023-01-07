import React from 'react'
import headshot from "./headshot.jpg";
import "./style.css";

export default function About() {
  return (
    <div className="about row">
      <h3 className="">Fullstack Developer</h3>
      <div class="col-6">
        <img className="headshot img-fluid rounded" src={headshot} alt="headshot of Alexander"/>
      </div>
      <div className="col-6">
        <p className="">My name is Alexander Carr, and I'm passionate about making interesting and powerful software, primarily on the web.</p>
        <p>I mostly work with javascript on frontend and also in Node.js, but I'm also fairly competent with PHP, shell scripting, and SQL</p>
      </div>
    </div>
  )
}
