import React from "react";
import { Helmet } from "react-helmet";

export default function Index() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>OruHelp - Home Page</title>
      </Helmet>
      <h1>This is Home page</h1>
    </React.Fragment>
  );
}
