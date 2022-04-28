import React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
        <div className='products-container'>
          {
            ['p1', 'p2'].map(p => p)
          }
        </div>
        Footer
      </div>
    </>
  );
};

export default Home;