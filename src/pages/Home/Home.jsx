import React from 'react';
import FeaturedPost from '../../components/App/FeaturedPost';
import MainHeading from '../../components/App/MainHeading';
import ListPost from '../../components/App/ListPost';

function Home() {
  return (
    <>
      <MainHeading />
      <FeaturedPost />
      <ListPost />
    </>
  );
}

export default Home;
