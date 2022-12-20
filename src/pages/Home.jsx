/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Home() {
  return (
    <>
      <h1 className="app-section__title">Home Page!</h1>
      <a className="underline underline-offset-1" href="/some-wrong-link">
        Test 'Page not Found'
      </a>
      <article className="py-8">
        <h2 className="text-2xl leading-8">Title</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          doloremque libero? Adipisci voluptas, quis dolores possimus quasi
          eligendi, maxime iusto voluptatum dolore perspiciatis rerum iste animi
          alias iure. Ipsa, repudiandae.
        </p>
      </article>
    </>
  );
}
