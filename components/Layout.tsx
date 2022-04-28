import React, { FC } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

interface Props{
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) : JSX.Element => {
  return (
    <div className='layout'>
      <Head>
        <title>My Dummy Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;