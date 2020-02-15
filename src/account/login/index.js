import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../signup";
import { withFirebase } from "../../common/components/Firebase";
import { PasswordForgetLink } from '../passwordforget';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
function SignInFormBase (props) {
  const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE });

  const onSubmit = event => {
    const { email, password } = userDetails;
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setUserDetails({...userDetails,  ...INITIAL_STATE });
        props.history.push("/blog/123");
        console.log("Success");
      })
      .catch(error => {
        setUserDetails({ ...userDetails, error });
        console.log("Error");
      });
    event.preventDefault();
  };
  const onChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
    const { email, password, error } = userDetails;
    const isInvalid = password === "" || email === "";
    return (
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
}
const SignInForm = withRouter(withFirebase(SignInFormBase));
export default SignInPage;
export { SignInForm };
