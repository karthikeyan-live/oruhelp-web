import React from "react";
import { Helmet } from "react-helmet";

function Index(props) {
  console.log(props);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <h1>This is Home page</h1>
    </React.Fragment>
  );
}

export default Index;
