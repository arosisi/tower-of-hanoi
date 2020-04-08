import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import { withStyles } from "@material-ui/core/styles";

import privateInfo from "../../privateInfo";

const styles = {
  content: {
    marginBottom: 20,
    textAlign: "center"
  },
  description: {
    minWidth: "25ch",
    marginBottom: 10
  },
  submit: {
    marginTop: 10
  },
  submitted: {
    marginBottom: 10
  },
  error: {
    margin: 0,
    color: "#f44336"
  }
};

class ReportBug extends React.Component {
  state = {
    verified: false,
    submitting: false,
    status: ""
  };

  handleSubmit = () => {
    const form = this.form;
    const data = new FormData(form);
    const description = data.get("description");

    if (description) {
      this.setState({ submitting: true }, () => {
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            this.setState({ submitting: false, status: "SUCCESS" });
          } else {
            this.setState({ submitting: false, status: "ERROR" });
          }
        };
        xhr.send(data);
      });
    }
  };

  render() {
    const { classes, windowWidth, onClose } = this.props;
    const { verified, submitting, status } = this.state;
    return (
      <Dialog className={classes.root} open={true} onClose={onClose}>
        <DialogTitle>Report a bug</DialogTitle>
        <DialogContent className={classes.content}>
          <Formik
            onSubmit={this.handleSubmit}
            initialValues={{ description: "" }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <form
                ref={element => {
                  this.form = element;
                }}
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}
                action={privateInfo.form_endpoint}
                method='POST'
              >
                <TextField
                  className={classes.description}
                  fullWidth
                  multiline
                  rowsMax={6}
                  name='description'
                  label='Description'
                  helperText='Describe the bug to report'
                  autoFocus={true}
                  value={values.description}
                  onChange={event => {
                    this.setState({ status: "" });
                    handleChange(event);
                  }}
                  disabled={status === "SUCCESS"}
                />

                <ReCAPTCHA
                  size={windowWidth < 416 ? "compact" : "normal"}
                  style={{
                    ...(status === "SUCCESS"
                      ? { opacity: 0.65, pointerEvents: "none" }
                      : null)
                  }}
                  sitekey={privateInfo.captcha_sitekey}
                  onChange={() => this.setState({ verified: true })}
                  onExpired={() => this.setState({ verified: false })}
                />

                <div className={classes.submit}>
                  {status === "SUCCESS" ? (
                    <p className={classes.submitted}>Submitted!</p>
                  ) : submitting ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      color='primary'
                      type='submit'
                      disabled={!values.description || !verified}
                    >
                      Submit
                    </Button>
                  )}
                  {status === "ERROR" && (
                    <p className={classes.error}>Ooops! There was an error.</p>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(ReportBug);
