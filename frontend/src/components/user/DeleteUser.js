import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core//Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Delete from "@material-ui/icons/Delete";
import auth from "../auth/auth-helper";
import { deleteUser } from "../../utils/api-user";
import { Redirect } from "react-router-dom";

const DeleteUser = (props) => {
  const [state, setState] = useState({
    redirect: false,
    open: false,
  });
  const clickButton = () => {
    setState({
      ...state,
      open: true,
    });
  };
  const deleteAccount = () => {
    const jwt = auth.isAuthenticated();
    deleteUser(
      {
        userId: props.userId,
      },
      { t: jwt.token }
    ).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        auth.signout(() => console.log("deleted"));
        setState({
          ...state,
          redirect: true,
        });
      }
    });
  };

  const handleRequestClose = () => {
    this.setState({ open: false });
    setState({
      ...state,
      open: false,
    });
  };
  if (state.redirect) {
    return <Redirect to="/" />;
  }
  return (
    <span>
      <IconButton aria-label="Delete" onClick={clickButton} color="secondary">
        <Delete />
      </IconButton>

      <Dialog open={state.open} onClose={handleRequestClose}>
        <DialogTitle>{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Confirm to delete your account.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={deleteAccount}
            color="secondary"
            autoFocus="autoFocus"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
};

export default DeleteUser;
