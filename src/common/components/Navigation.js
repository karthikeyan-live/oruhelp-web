import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../../account/signout";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={"/account/login"}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
