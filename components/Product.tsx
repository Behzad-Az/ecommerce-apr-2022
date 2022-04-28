import React, { FC } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/sanityClient';
import { Product as ProductType } from '../lib/types';

interface Props{
  product: ProductType;
};

const Product: FC<Props> = ({ product }) : JSX.Element => {
  const {
    image,
    name,
    slug,
    price
  } = product;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image[0]).toString()}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>
            {name}
          </p>
          <p className='product-price'>
            ${price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;