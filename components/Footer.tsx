import React, { FC } from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

interface Props{};

const Footer: FC<Props> = () : JSX.Element => {
  return (
    <div className='footer-container'>
      <p>2022 Dummy Store All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;