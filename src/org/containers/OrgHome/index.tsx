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
      <div style={{ flexGrow: 2, maxWidth: "200px" }}>
        <Card>
          <CardActionArea style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Avatar style={{ height: "100px", width: "100px", marginTop: "20px" }}>H</Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Organization Name
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                @{userName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div style={{ flexGrow: 8, maxWidth: "800px", maxHeight:"250px" }}>3</div>
    </div>
  );
}
