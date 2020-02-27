import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { doSignOut } from "../services/authentication";

const SignOutButton = props => {
  const signingOut = () => {
    doSignOut().then(() => props.history.push("/"));
  };
  return (
    <MenuItem onClick={signingOut}>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Signout</p>
    </MenuItem>
  );
};
export default withRouter(SignOutButton);
