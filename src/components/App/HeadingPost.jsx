import React from 'react';
import { Link } from 'react-router-dom';

function HeadingPost() {
  return (
    <div className="mainheading">
      <div className="row post-top-meta">
        <div className="col-md-2">
          <a href="author.html">
            <img
              className="author-thumb"
              src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
              alt="Sal"
            />
          </a>
        </div>
        <div className="col-md-10">
          <a className="link-dark" href="author.html">
            Sal
          </a>
          <Link to="/post" className="btn follow">
            Follow
          </Link>
          <span className="author-description">
            Founder of WowThemes.net and creator of
            <b>&quot;Mediumish&quot;</b>
            theme that you&quot;re currently previewing. Developing professional
            premium themes, templates, plugins, scripts since 2012.
          </span>
          <span className="post-date">22 July 2017</span>
          <span className="dot" />
          <span className="post-read">6 min read</span>
        </div>
      </div>

      <h1 className="posttitle">
        18 Things You Should Learn Before Moving Into a New Home
      </h1>
    </div>
  );
}

export default HeadingPost;
