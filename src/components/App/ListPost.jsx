import React from 'react';
import ListCard from './ListCard';

function ListPost() {
  return (
    <section className="recent-posts">
      <div className="section-title">
        <h2>
          <span>All Stories</span>
        </h2>
      </div>
      <div className="card-columns listrecent">
        <ListCard />
      </div>
    </section>
  );
}

export default ListPost;
