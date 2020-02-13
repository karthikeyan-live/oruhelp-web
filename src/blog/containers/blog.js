import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch
} from "react-router-dom";

export default function Blog() {
  let { userName, blogId } = useParams();
  return <h1>{`Blog ${userName} - ${blogId}`}</h1>;
}
