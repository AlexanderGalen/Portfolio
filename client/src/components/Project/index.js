import React from 'react';

const imageDimensions = {
  width: 586,
  height: 373,
}

export default function Project({ image, title, github, link }) {
  return (
      <section className="col-6">
        <section className="project m-2 border border-secondary rounded p-3">
          <a href={link}>
            <h5 className="text-center">{title}</h5>
            <img className="img-fluid" src={image} alt={`screenshot of ${title}`} width={imageDimensions.width} height={imageDimensions.height} />
          </a>
          <a href={github}>
            <h6 className="text-center">Github Repo</h6>
          </a>
        </section>
      </section>
  );
}
