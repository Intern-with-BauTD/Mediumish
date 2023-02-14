import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { IMG5, IMG6, IMG7, IMG8, IMG9, IMG10 } from '../../assets/img';
import { ReactComponent as IconUse } from '../../assets/svg/IconUse.svg';
import { LOCATIONS } from '../../constants/index';

function ListCard() {
  return (
    <>
      <div className="card">
        <Link to={LOCATIONS.POST}>
          <img className="img-fluid" src={IMG5} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={LOCATIONS.POST}>
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
                <Link to={LOCATIONS.AUTHOR}>
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to={LOCATIONS.POST} title="Read <IconUse />">
                  <IconUse />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to={LOCATIONS.POST}>
          <img className="img-fluid" src={IMG6} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={LOCATIONS.POST}>
              Best galleries in the world with photos
            </Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
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
                <span className="/post-name">
                  <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to={LOCATIONS.POST} title="Read <IconUse />">
                  <IconUse />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to={LOCATIONS.POST}>
          <img className="img-fluid" src={IMG7} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={LOCATIONS.POST}>
              Little red dress and a perfect summer
            </Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
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
                <span className="/post-name">
                  <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to={LOCATIONS.POST} title="Read <IconUse />">
                  <IconUse />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to={LOCATIONS.POST}>
          <img className="img-fluid" src={IMG8} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={LOCATIONS.POST}>
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
                <Link to={LOCATIONS.AUTHOR}>
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to={LOCATIONS.POST} title="Read <IconUse />">
                  <IconUse />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to={LOCATIONS.POST}>
          <img className="img-fluid" src={IMG9} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={LOCATIONS.POST}>
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
                <Link to={LOCATIONS.AUTHOR}>
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="/post-name">
                  <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to={LOCATIONS.POST} title="Read <IconUse />">
                  <IconUse />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <Link to={LOCATIONS.POST}>
          <img className="img-fluid" src={IMG10} alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to={LOCATIONS.POST}>
              Visiting the world means learning cultures
            </Link>
          </h2>
          <h4 className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
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
                <span className="/post-name">
                  <Link to={LOCATIONS.AUTHOR}>Sal</Link>
                </span>
                <br />
                <span className="/post-date">22 July 2017</span>
                <span className="dot" />
                <span className="/post-read">6 min read</span>
              </span>
              <span className="/post-read-more">
                <Link to={LOCATIONS.POST} title="Read <IconUse />">
                  <IconUse />
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
