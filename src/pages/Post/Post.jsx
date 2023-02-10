import React from 'react';
import LeftShare from '../../components/App/LeftShare';
import HeadingPost from '../../components/App/HeadingPost';
import PostImage from '../../components/App/PostImage';
import PostContent from '../../components/App/PostContent';
import TagPost from '../../components/App/TagPost';
import RelatedPost from '../../components/App/RelatedPost';
import AlertBar from '../../components/App/AlertBar';

function Post() {
  return (
    <>
      <div className="container">
        <div className="row">
          <LeftShare />
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <HeadingPost />
            <PostImage />
            <PostContent />
            <TagPost />
          </div>
        </div>
      </div>
      <RelatedPost />
      <AlertBar />
    </>
  );
}

export default Post;
