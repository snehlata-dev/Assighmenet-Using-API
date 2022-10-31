import React from "react";
import moment from "moment";
const Post = ({ post }) => {
  return (
    <div className="post">
      <div>
        <img alt="post-e" src={post.image} />
      </div>
      <div>
        <b>{post.name}</b>
        <p>{post.description}</p>
      </div>
      <div>
        <b>Last Updated Date :{"  "} </b>
        {moment(post.dateLastEdited).format("LLL")}
      </div>
    </div>
  );
};

export default Post;
