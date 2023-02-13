import React from 'react';
import FeaturedCard from './FeaturedCard';

function FeaturedPost() {
  return (
    <section className='featured-posts"'>
      <div className="section-title">
        <h2>
          <span>Featured</span>
        </h2>
      </div>
      <div className="card-columns listfeaturedtag">
        <FeaturedCard />
      </div>
    </section>
  );
}

export default FeaturedPost;
