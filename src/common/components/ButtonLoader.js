import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  wrapper: {
    position: "relative",
    width: "100%"
  },
  buttonProgress: {
    color: "primary",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function ButtonLoader(props) {
  const classes = useStyles();
  const modifiedProps = { ...props, loading: undefined };
  return (
    <div className={props.className}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button {...modifiedProps} disabled={props.disabled || props.loading}>
            {props.value}
          </Button>
          {props.loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    </div>
  );
}
