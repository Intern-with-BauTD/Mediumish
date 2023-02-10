import React from 'react';
import { Link } from 'react-router-dom';

function TagPost() {
  return (
    <div className="after-post-tags">
      <ul className="tags">
        <li>
          <Link href="/">Design</Link>
        </li>
        <li>
          <Link href="/">Growth Mindset</Link>
        </li>
        <li>
          <Link href="/">Productivity</Link>
        </li>
        <li>
          <Link href="/">Personal Growth</Link>
        </li>
      </ul>
    </div>
  );
}

export default TagPost;
