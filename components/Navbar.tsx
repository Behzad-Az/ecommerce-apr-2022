import React, { FC } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

interface Props{};

const Navbar: FC<Props> = () : JSX.Element => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>My Dummy Store</Link>
      </p>
      <button 
        type='button' 
        className='cart-icon'
        onClick={() => null}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  );
};

export default Navbar;