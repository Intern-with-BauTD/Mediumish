import React from 'react';
import { Link } from 'react-router-dom';
import IMG8 from '../../assets/img/demopic/8.jpg';
import IMG9 from '../../assets/img/demopic/9.jpg';
import IMG10 from '../../assets/img/demopic/10.jpg';
import IconUse from '../../assets/svg/IconUse';

function AuthorPost() {
  return (
    <div className="graybg authorpage">
      <div className="container">
        <div className="listrecent listrelated">
          <div className="authorpostbox">
            <div className="card">
              <Link to="/author">
                <img className="img-fluid img-thumb" src={IMG8} alt="" />
              </Link>
              <div className="card-block">
                <h2 className="card-title">
                  <Link to="/post">Life is worth living forever and ever</Link>
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

          <div className="authorpostbox">
            <div className="card">
              <Link to="/author">
                <img className="img-fluid img-thumb" src={IMG10} alt="" />
              </Link>
              <div className="card-block">
                <h2 className="card-title">
                  <Link to="/post">
                    Best European capitals to visit and the costs implied
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

          <div className="authorpostbox">
            <div className="card">
              <Link to="/author">
                <img className="img-fluid img-thumb" src={IMG9} alt="" />
              </Link>
              <div className="card-block">
                <h2 className="card-title">
                  <Link to="/post">
                    10 Things you should learn before visiting
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
      </div>
    </div>
  );
}

export default AuthorPost;
