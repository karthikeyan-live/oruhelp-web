import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../common/components/Firebase";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};
function SignUpFormBase(props) {
const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE })
  const onSubmit = event => {
    const { username, email, passwordOne } = userDetails;
    console.log("Signing Up");
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        setUserDetails({ ...INITIAL_STATE });
        this.props.history.push("/blog/123");
        console.log("Success");
      })
      .catch(error => {
        setUserDetails({ error });
        console.log("Error");
        console.log(error);
      });
    event.preventDefault();
  };
  const onChange = event => {
    setUserDetails({ [event.target.name]: event.target.value });
  };
    const { username, email, passwordOne, passwordTwo, error } = userDetails;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
}
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"/account/signup"}>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };
