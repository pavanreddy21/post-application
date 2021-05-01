import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v4 as uuidv4 } from "uuid";

const newDraftPost = {
  id: null,
  heading: "",
  description: "",
  createdDate: null,
  updatedDate: null,
  userId: null,
  likes: 0,
  isLikedByCurrentUser: false,
};

const CreatePostDialog = ({ toggleDialog, isOpen, savePost }) => {
  const [post, setNewPost] = useState(newDraftPost);

  const handleClose = () => {
    toggleDialog(false);
  };

  const handelSave = () => {
    savePost({ ...post, id: uuidv4() });
    toggleDialog(false);
  };

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setNewPost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setNewPost(newDraftPost);
  }, [isOpen]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="heading"
            name="heading"
            label="Post Title"
            type="text"
            value={post.heading}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            label="Description"
            value={post.description}
            onChange={handleChange}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handelSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePostDialog;
