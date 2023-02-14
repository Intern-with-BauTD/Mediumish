import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconUse } from '../../assets/svg/IconUse.svg';

function LeftShare() {
  return (
    <div className="col-md-2 col-xs-12">
      <div className="share">
        <p>Share</p>
        <ul>
          <li>
            <Link
              target="_blank"
              to="https://twitter.com/home?status=http%3A//www.wowthemes.net"
              rel="noreferrer"
            >
              <IconUse />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.wowthemes.net"
              rel="noreferrer"
            >
              <IconUse />
            </Link>
          </li>
        </ul>
        <div className="sep" />
        <p>Talk</p>
        <ul>
          <li>
            <a href="#comments">
              42
              <br />
              <IconUse />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftShare;
