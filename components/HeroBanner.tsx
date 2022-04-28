import React, { FC } from 'react';
import Link from 'next/link';

import { Banner as BannerType } from '../lib/types';
import { urlFor } from '../lib/sanityClient';

interface Props{
  bannerData: BannerType;
};

const HeroBanner: FC<Props> = ({ bannerData }) : JSX.Element => {
  const {
    smallText,
    midText,
    largeText1,
    image,
    product,
    buttonText,
    desc
  } = bannerData;
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image).toString()} alt='headphones' className='hero-banner-image' />
        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;