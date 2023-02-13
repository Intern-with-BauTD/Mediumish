import React from 'react';
import { Link } from 'react-router-dom';
import IMG5 from '../../assets/img/demopic/5.jpg';
import IMG6 from '../../assets/img/demopic/6.jpg';
import IMG7 from '../../assets/img/demopic/7.jpg';
import IMG8 from '../../assets/img/demopic/8.jpg';
import IMG9 from '../../assets/img/demopic/9.jpg';
import IMG10 from '../../assets/img/demopic/10.jpg';
import IconUse from '../../assets/svg/IconUse';

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
                  {IconUse}
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
                  {IconUse}
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
                  {IconUse}
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
                  {IconUse}
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
                  {IconUse}
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
                  {IconUse}
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
