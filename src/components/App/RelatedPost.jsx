import React from 'react';
import { Link } from 'react-router-dom';
import IMG7 from '../../assets/img/demopic/7.jpg';
import IMG8 from '../../assets/img/demopic/8.jpg';
import IMG9 from '../../assets/img/demopic/9.jpg';
import { ReactComponent as IconUse } from '../../assets/svg/IconUse.svg';
import { LOCATIONS } from '../../constants/index';

function RelatedPost() {
  return (
    <div className="graybg">
      <div className="container">
        <div className="row listrecent listrelated">
          <div className="col-md-4">
            <div className="card">
              <Link to={LOCATIONS.POST}>
                <img className="img-fluid img-thumb" src={IMG9} alt="" />
              </Link>
              <div className="card-block">
                <h2 className="card-title">
                  <Link to={LOCATIONS.POST}>
                    Best recreational places to visit on a holiday
                  </Link>
                </h2>
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

          <div className="col-md-4">
            <div className="card">
              <Link to={LOCATIONS.POST}>
                <img className="img-fluid img-thumb" src={IMG8} alt="" />
              </Link>
              <div className="card-block">
                <h2 className="card-title">
                  <Link to={LOCATIONS.POST}>
                    How travelling can change your life
                  </Link>
                </h2>
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
          <div className="col-md-4">
            <div className="card">
              <Link to={LOCATIONS.POST}>
                <img className="img-fluid img-thumb" src={IMG7} alt="" />
              </Link>
              <div className="card-block">
                <h2 className="card-title">
                  <Link to={LOCATIONS.POST}>
                    Little red dress and a perfect summer
                  </Link>
                </h2>
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
      </div>
    </div>
  );
}

export default RelatedPost;
