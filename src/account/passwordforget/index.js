import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  console.log("Login hit");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const INITIAL_STATE = {
  email: "",
  error: null
};
function PasswordForgetFormBase(props) {
  const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE });

  const onSubmit = event => {
    event.preventDefault();
    const { email } = userDetails;
    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setUserDetails({ ...userDetails, ...INITIAL_STATE });
      })
      .catch(error => {
        setUserDetails({ ...userDetails, error });
      });
  };
  const onChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const { email, error } = userDetails;
  const isInvalid = email === "";
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            name="email"
            value={userDetails.email}
            onChange={onChange}
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          {error && <p>{error.message}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isInvalid}
          >
            Reset My Password
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
const PasswordForgetLink = () => (
  <p>
    <Link to={"/account/forgotpassword"}>Forgot Password?</Link>
  </p>
);
const PasswordForgetForm = PasswordForgetFormBase;
export default PasswordForgetForm;
export { PasswordForgetLink };
