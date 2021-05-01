import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comment from "./Comment";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
});

const PostItem = ({ data, handlePostLikeClick }) => {
  const classes = useStyles();

  const {
    heading,
    description,
    likes,
    isLikedByCurrentUser,
    comments = [],
  } = data;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    // ideally we need to fetch comments here on expanding
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {heading}
        </Typography>
        <Typography variant="h5" component="h2">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like" onClick={handlePostLikeClick}>
          <FavoriteIcon htmlColor={isLikedByCurrentUser ? "red" : "grey"} />
        </IconButton>
        <Typography paragraph>{likes}</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          {comments.length ? (
            comments.map((comment) => {
              return <Comment key={comment.id} data={comment} />;
            })
          ) : (
            <></>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostItem;
