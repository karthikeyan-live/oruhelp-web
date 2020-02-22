import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function RegisteredDetailsForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registered Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="uniqueId"
            name="uniqueId"
            label="Unique ID"
            onChange={props.onChange}
            value={props.uniqueId}
            helperText="Eg: TN/2020/0XXXXXX"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="registrationNo"
            name="registrationNo"
            label="Registration Number"
            helperText="Eg: 01/2019"
            onChange={props.onChange}
            value={props.registrationNo}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="registeredDate"
            name="registeredDate"
            label="Registered date"
            onChange={props.onChange}
            value={props.registeredDate}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="registeredState"
            name="registeredState"
            label="Registered State"
            onChange={props.onChange}
            value={props.registeredState}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
