import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';

function DefaultLayout(prop) {
  const { children } = prop;
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
