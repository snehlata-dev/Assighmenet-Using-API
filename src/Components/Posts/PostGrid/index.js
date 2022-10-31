import React from "react";
import Post from "./Post";
import "./postGrid.css";
const PostGrid = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default PostGrid;
