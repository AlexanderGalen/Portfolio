import React from 'react';

export default function Project({ image, title, github, link }) {
  return (
    <div className="project col-6">
      <a href={link}>
        <h5 className="text-center">{title}</h5>
        <img className="img-fluid" src={image} alt={`screenshot of project`} />
      </a>
      <a href={github}>
        <h6 className="text-center">Github Repo</h6>
      </a>
    </div>
  );
}
