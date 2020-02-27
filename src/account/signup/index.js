import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ButtonLoader from "../../common/components/ButtonLoader";

import {
  doCreateUserWithEmailAndPassword,
  signupUserDetails
} from "../services/authentication";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "} {new Date().getFullYear()}
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};
function SignUpFormBase(props) {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE });
  const [loading, setLoading] = useState(false);
  const onSubmit = event => {
    setLoading(true);
    const { username, email, firstName, lastName, passwordOne } = userDetails;
    doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("Success");
        return signupUserDetails(authUser.user.uid, {
          username,
          email,
          firstName,
          lastName
        })
          .then(() => {
            setUserDetails({ ...userDetails, ...INITIAL_STATE });
            setLoading(false);
            props.history.push("/blog/123");
          })
          .catch(error => {
            console.log(
              "TODO: Notify that additional details were not registered"
            );
            setUserDetails({ ...userDetails, ...INITIAL_STATE });
            setLoading(false);
            props.history.push("/blog/123");
          });
      })
      .catch(error => {
        setLoading(false);
        console.log("TODO: Failure in creating user; ask to try again");
      });
    event.preventDefault();
  };
  const onChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const {
    username,
    email,
    firstName,
    lastName,
    passwordOne,
    passwordTwo,
    error
  } = userDetails;

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  onChange={onChange}
                  type="text"
                  required
                  fullWidth
                  value={firstName}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastName"
                  variant="outlined"
                  onChange={onChange}
                  type="text"
                  required
                  fullWidth
                  value={lastName}
                  id="lastName"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={username}
                  onChange={onChange}
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
                  onChange={onChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordOne"
                  label="Password"
                  type="password"
                  value={passwordOne}
                  onChange={onChange}
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordTwo"
                  label="Confirm Password"
                  type="password"
                  value={passwordTwo}
                  onChange={onChange}
                  id="confirmpassword"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <ButtonLoader
              disabled={isInvalid}
              value="Sign Up"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              loading={loading}
              className={classes.submit}
            />
            <Typography variant="body2" gutterBottom color="error">
              {error && error.message}
            </Typography>

            <Grid container justify="flex-end">
              <Grid item>
                <Link to={"/account/login"}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
const SignUpLink = () => (
  <p>
    <Link to={"/account/signup"}>Don't have an account? Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(SignUpFormBase);
export default SignUpForm;
export { SignUpLink };
