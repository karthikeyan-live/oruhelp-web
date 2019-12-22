import React from "react";
import { useParams } from "react-router-dom";

export default function BlogHome() {
  let { userName } = useParams();
  return <h1>{`Blog ${userName}`}</h1>;
}
