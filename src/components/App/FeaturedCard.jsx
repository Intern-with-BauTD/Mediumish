import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { IMG1, IMG2, IMG3, IMG4 } from '../../assets/img';
import { ReactComponent as IconUse } from '../../assets/svg/IconUse.svg';
import { LOCATIONS } from '../../constants/index';

function FeaturedCard() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-5 wrapthumbnail">
            <Link to={LOCATIONS.POST}>
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG1})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to={LOCATIONS.POST}>
                  We are living some strange times
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
                    <Link to={LOCATIONS.AUTHOR}>
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to={LOCATIONS.AUTHOR}>Steve</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to={LOCATIONS.POST} title="Read Story">
                      <IconUse />
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
            <Link to={LOCATIONS.POST}>
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG2})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to={LOCATIONS.POST}>
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
                    <Link to={LOCATIONS.AUTHOR}>
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to={LOCATIONS.AUTHOR}>Jane</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to={LOCATIONS.POST} title="Read Story">
                      <IconUse />
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
                <Link to={LOCATIONS.POST}>Dreaming of Las Vegas Crazyness</Link>
              </h2>
              <h4 className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </h4>
              <div className="metafooter">
                <div className="wrapfooter">
                  <span className="meta-footer-thumb">
                    <Link to={LOCATIONS.AUTHOR}>
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to={LOCATIONS.AUTHOR}>Mary</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to={LOCATIONS.POST} title="Read Story">
                      <IconUse />
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
            <Link to={LOCATIONS.POST}>
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${IMG4})` }}
              />
            </Link>
          </div>
          <div className="col-md-7">
            <div className="card-block">
              <h2 className="card-title">
                <Link to={LOCATIONS.POST}>
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
                    <Link to={LOCATIONS.AUTHOR}>
                      <img
                        className="author-thumb"
                        src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                        alt="Sal"
                      />
                    </Link>
                  </span>
                  <span className="author-meta">
                    <span className="post-name">
                      <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                    </span>
                    <br />
                    <span className="post-date">22 July 2017</span>
                    <span className="dot" />
                    <span className="post-read">6 min read</span>
                  </span>
                  <span className="post-read-more">
                    <Link to={LOCATIONS.POST} title="Read Story">
                      <IconUse />
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
