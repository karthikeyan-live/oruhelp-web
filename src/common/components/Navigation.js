import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../../account/signout";
import { AuthUserContext } from '../../common/components/Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
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
