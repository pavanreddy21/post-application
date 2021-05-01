import React, { useState } from "react";
import PostsListView from "./PostsListView";
import mockPosts from "../mockData/posts.json";
import { Button } from "@material-ui/core";
import CreatePostDialog from "./CreatePostDialog";

const HomePage = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isCreatePostDialogOpen, toggleCreatePostDialog] = React.useState(
    false
  );

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => {
      setPosts([newPost, ...prevPosts]);
    });
  };

  const handlePostLikeClick = (currentPost) => {
    console.log(currentPost);
    //ideally we need make an api call and refetch that particular post
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === currentPost.id) {
          return {
            ...currentPost,
            isLikedByCurrentUser: !currentPost.isLikedByCurrentUser,
            likes: currentPost.isLikedByCurrentUser
              ? currentPost.likes - 1
              : currentPost.likes + 1,
          };
        } else return post;
      });
    });
  };

  return (
    <>
      <Button onClick={() => toggleCreatePostDialog(true)}>Create Post</Button>
      <PostsListView posts={posts} handlePostLikeClick={handlePostLikeClick} />
      <CreatePostDialog
        isOpen={isCreatePostDialogOpen}
        toggleDialog={toggleCreatePostDialog}
        savePost={addNewPost}
      />
    </>
  );
};

export default HomePage;
