import React from 'react';
import { Link } from 'react-router-dom';
import IMG1 from '../../assets/img/demopic/1.jpg';
import IMG2 from '../../assets/img/demopic/2.jpg';
import IMG3 from '../../assets/img/demopic/3.jpg';
import IMG4 from '../../assets/img/demopic/4.jpg';
import IconUse from '../../assets/svg/IconUse';

function FeaturedCard() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-5 wrapthumbnail">
            <Link to="/post">
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG1})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to="/post">We are living some strange times</Link>
              </h2>
              <h4 className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </h4>
              <div className="metafooter">
                <div className="wrapfooter">
                  <span className="meta-footer-thumb">
                    <Link to="/author">
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to="/author">Steve</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to="/post" title="Read Story">
                      {IconUse}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-5 wrapthumbnail">
            <Link to="/post">
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG2})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to="/post">
                  The beauty of this world is in your heart
                </Link>
              </h2>
              <h4 className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </h4>
              <div className="metafooter">
                <div className="wrapfooter">
                  <span className="meta-footer-thumb">
                    <Link to="/author">
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to="/author">Jane</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to="/post" title="Read Story">
                      {IconUse}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-5 wrapthumbnail">
            <Link to="post">
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG3})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to="/post">Dreaming of Las Vegas Crazyness</Link>
              </h2>
              <h4 className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </h4>
              <div className="metafooter">
                <div className="wrapfooter">
                  <span className="meta-footer-thumb">
                    <Link to="/author">
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to="/author">Mary</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to="/post" title="Read Story">
                      {IconUse}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-5 wrapthumbnail">
            <Link to="/post">
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG4})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to="/post">
                  San Francisco at its best view in all seasons
                </Link>
              </h2>
              <h4 className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </h4>
              <div className="metafooter">
                <div className="wrapfooter">
                  <span className="meta-footer-thumb">
                    <Link to="/author">
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to="/author">Sal</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to="/post" title="Read Story">
                      {IconUse}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
