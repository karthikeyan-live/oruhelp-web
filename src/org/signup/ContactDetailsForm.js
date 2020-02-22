import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function ContactDetailsForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="contactName"
            name="contactName"
            label="Contact Person Name"
            fullWidth
            onChange={props.onChange}
            value={props.contactName}
            autoComplete="contact person name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="telephone"
            name="telephone"
            label="Telephone"
            fullWidth
            onChange={props.onChange}
            value={props.telephone}
            autoComplete="Telephone"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Mobile Number"
            fullWidth
            onChange={props.onChange}
            value={props.mobile}
            autoComplete="mobile number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            rows="4"
            id="address"
            name="address"
            label="Complete Address"
            fullWidth
            onChange={props.onChange}
            value={props.address}
            autoComplete="Address"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
