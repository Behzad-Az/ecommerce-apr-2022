import React from 'react';
import type { NextPage } from 'next';

import { client as sanityClient } from '../lib/sanityClient';
import { Product, FooterBanner, HeroBanner } from '../components';
import { 
  Banner as BannerType,
  Product as ProductType
} from '../lib/types';

interface Props {
  bannerData: BannerType[];
  products: ProductType[];
};

const Home: NextPage<Props> = ({ products, bannerData }) : JSX.Element => {
  return (
    <>
      <HeroBanner 
        heroBanner={bannerData[0]} 
      />
      <div className='products-heading'>
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
        <div className='products-container'>
          {
            products?.map(product => <Product 
              key={product._id}
              product={product}
            />)
          }
        </div>
        <FooterBanner />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery: string = '*[_type == "product"]';
  const products: ProductType[] = await sanityClient.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData: BannerType[] = await sanityClient.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  };
};

export default Home;