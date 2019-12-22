import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch
} from "react-router-dom";

export default function Blog() {
  let { id } = useParams();
  return <h1>{`Blog ${id}`}</h1>;
}
