import React from 'react';
import { Link } from 'react-router-dom';
import IMG5 from '../../assets/img/demopic/5.jpg';
import IMG6 from '../../assets/img/demopic/6.jpg';
import IMG7 from '../../assets/img/demopic/7.jpg';
import IMG8 from '../../assets/img/demopic/8.jpg';
import IMG9 from '../../assets/img/demopic/9.jpg';
import IMG10 from '../../assets/img/demopic/10.jpg';

function ListCard() {
  return (
    <>
      <div className="card">
        <Link to="/post">
          <img className="img-fluid" src={IMG5} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/post">
              Autumn doesn&apos;t have to be nostalgic, you know?
            </Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="author">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to="author">Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to="/post" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to="/post">
          <img className="img-fluid" src={IMG6} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/post">Best galleries in the world with photos</Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="author">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to="author">Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to="/post" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to="/post">
          <img className="img-fluid" src={IMG7} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/post">Little red dress and a perfect summer</Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="author">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to="author">Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to="/post" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to="/post">
          <img className="img-fluid" src={IMG8} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/post">
              Thinking outside the box can help you prosper
            </Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="author">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to="author">Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to="/post" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to="/post">
          <img className="img-fluid" src={IMG9} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/post">
              10 Things you should know about choosing your house
            </Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="author">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to="author">Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to="/post" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to="/post">
          <img className="img-fluid" src={IMG10} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/post">Visiting the world means learning cultures</Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to="author">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to="author">Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to="/post" title="Read Story">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;