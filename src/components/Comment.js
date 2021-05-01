import React from "react";
import Typography from "@material-ui/core/Typography";

const Comment = ({ data }) => {
  const { title, userInfo, comments = [] } = data;

  return (
    <>
      user name {userInfo.name}
      <Typography valiant="body">{title}</Typography>
      {
        //add some padding logic add
      }
      {comments.length ? (
        comments.map((comment) => {
          return <Comment key={comment.id} data={comment} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
