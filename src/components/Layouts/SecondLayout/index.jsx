import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import Twitter from '../Twitter.jsx';

function SecondLayOut(prop) {
  const { children } = prop;
  return (
    <>
      <Navbar />
      {children}
      <Twitter />
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default SecondLayOut;
