import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../signup";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { withFirebase } from "../../common/components/Firebase";
import { PasswordForgetLink } from "../passwordforget";

function Copyright() {
  console.log("Login hit");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
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
  password: "",
  error: null
};
function SignInFormBase(props) {
  const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE });

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = userDetails;
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setUserDetails({ ...userDetails, ...INITIAL_STATE });
        props.history.push("/blog/123");
        console.log("Success");
      })
      .catch(error => {
        setUserDetails({ ...userDetails, error });
        console.log("Error");
      });
  };
  const onChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const { email, password, error } = userDetails;
  const isInvalid = password === "" || email === "";

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
            variant="outlined"
            margin="normal"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Email Address"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <PasswordForgetLink />
            </Grid>
            <Grid item>
              <SignUpLink />
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
const SignInForm = withRouter(withFirebase(SignInFormBase));
export default SignInForm;
