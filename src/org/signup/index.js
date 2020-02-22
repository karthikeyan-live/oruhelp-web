import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SignupDetailsForm from "./SignupDetailsForm";
import RegisteredDetailsForm from "./RegisteredDetailsForm";
import ContactDetailsForm from "./ContactDetailsForm";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ["Signup Details", "Registration details", "Contact Details"];

export default function OrgSignUp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [ngoDetails, setNgoDetails] = React.useState({
    userName: "",
    ngoName: "",
    uniqueId: "",
    registrationNo: "",
    registeredDate: "",
    registeredState: "",
    contactName: "",
    telephone: "",
    mobile: "",
    address: ""
  });

  const handleNext = () => {
    if (activeStep === 0) {
      alert("Validate User Name");
    }
    setButtonDisabled(validate(activeStep + 1));
    setActiveStep(activeStep + 1);
  };

  const validate = step => {
    if (step === 0) {
      return !(ngoDetails.userName && ngoDetails.ngoName);
    } else if (step === 1) {
      return !(
        ngoDetails.uniqueId &&
        ngoDetails.registrationNo &&
        ngoDetails.registeredDate &&
        ngoDetails.registeredState
      );
    } else if (step === 2) {
      return !(
        ngoDetails.contactName &&
        ngoDetails.telephone &&
        ngoDetails.mobile &&
        ngoDetails.address
      );
    }
    return false;
  };
  const handleBack = () => {
    setButtonDisabled(false);
    setActiveStep(activeStep - 1);
  };

  const onChange = event => {
    setNgoDetails({
      ...ngoDetails,
      [event.target.name]: event.target.value
    });
    setButtonDisabled(validate(activeStep));
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            NGO Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for registering your NGO.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {(activeStep === 0 && (
                  <SignupDetailsForm {...ngoDetails} onChange={onChange} />
                )) ||
                  (activeStep === 1 && (
                    <RegisteredDetailsForm
                      {...ngoDetails}
                      onChange={onChange}
                    />
                  )) ||
                  (activeStep === 2 && (
                    <ContactDetailsForm {...ngoDetails} onChange={onChange} />
                  ))}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={buttonDisabled}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Register" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
