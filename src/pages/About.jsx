import React from 'react';

export default function About() {
  return (
    <>
      <h1 className="app-section__title">About page</h1>
      <article className="app-article">
        <h2 className="app-article__title">
          Accusamus id optio obcaecati vitae?
        </h2>
        <img
          src="/assets/about.jpeg"
          alt="about"
          className="app-article__image"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quasi tempore illum quo, iste fuga et repudiandae ex vero nemo
          pariatur assumenda veritatis! Fugit, perferendis. Cupiditate aut
          officia distinctio a.
        </p>
      </article>
    </>
  );
}
