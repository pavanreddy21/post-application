import React from "react";
import PostItem from "./PostItem";

const PostsListView = ({ posts = [], handlePostLikeClick }) => {
  return posts.map((post) => {
    return (
      <PostItem
        data={post}
        key={post.id}
        handlePostLikeClick={() => handlePostLikeClick(post)}
      />
    );
  });
};

export default PostsListView;
