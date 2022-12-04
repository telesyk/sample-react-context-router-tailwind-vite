import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <h1 className="text-2xl leading-8">Hi there!</h1>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="btn btn-outline"
        type="button"
      >
        Counter {count}
      </button>
    </Layout>
  );
}
