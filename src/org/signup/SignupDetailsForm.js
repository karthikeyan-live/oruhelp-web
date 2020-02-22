import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function SignupDetailsForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Signup Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            value={props.userName}
            id="userName"
            name="userName"
            label="User Name"
            onChange={props.onChange}
            fullWidth
            autoComplete="user name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ngoName"
            value={props.ngoName}
            name="ngoName"
            label="NGO/Trust Name"
            onChange={props.onChange}
            fullWidth
            autoComplete="ngo name"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
