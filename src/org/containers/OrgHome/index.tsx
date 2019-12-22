import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch
} from "react-router-dom";
import "./index.css";
import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import classes from "*.module.css";

export default function Index() {
  let { userName } = useParams();
  return (
    <div className="flex-container">
      <div style={{ flexGrow: 2, maxWidth: "240px", height: "100%" }}>
        <Card>
          <CardActionArea
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Avatar
              style={{ height: "100px", width: "100px", marginTop: "20px" }}
            >
              H
            </Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Organization Name
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                @{userName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div
        style={{
          flexGrow: 7,
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "DodgerBlue"
        }}
      >
        <div
          style={{
            height: "250px",
            marginBottom: "5px",
            backgroundColor: "#f1f1f1"
          }}
        >
          Background Image
        </div>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div style={{ flexGrow: 8, height: "250px" }}>
            <div style={{ backgroundColor: "#f1f1f1" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Post 1
              </Typography>
            </div>
            <div style={{ backgroundColor: "#f1f1f1" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Post 2
              </Typography>
            </div>
            <div style={{ backgroundColor: "#f1f1f1" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Post 3
              </Typography>
            </div>
          </div>
          <div
            style={{
              flexGrow: 1,
              marginLeft: "5px"
            }}
          >
            <div style={{ backgroundColor: "#f1f1f1" }}>
              <Typography variant="h5" component="h2">
                About
              </Typography>
              <Typography variant="h5" component="h2">
                About
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
