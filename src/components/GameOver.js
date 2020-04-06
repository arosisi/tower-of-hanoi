import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import { withStyles } from "@material-ui/core/styles";

import { formatTime } from "../helpers";
import privateInfo from "../privateInfo";

const styles = {
  root: {
    textAlign: "center"
  },
  content: {
    marginBottom: 20
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  submit: {
    marginTop: 10
  },
  error: {
    color: "#f44336"
  }
};

class GameOver extends React.Component {
  state = {
    fetching: true,
    highScore: null,
    submitting: false,
    showError: false
  };

  componentDidMount() {
    const { numDisks } = this.props;
    fetch(privateInfo.api_endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get-high-scores" })
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          const highScores = response.highScores.filter(
            highScore => highScore.NumDisks === numDisks
          );
          this.setState({
            fetching: false,
            highScore: highScores.length ? highScores[0] : null
          });
        } else {
          this.setState({ fetching: false });
          console.log(response.message);
        }
      })
      .catch(error => console.log("Unable to connect to API.", error));
  }

  renderTimeSubmitForm = () => {
    const { classes } = this.props;
    return (
      <Formik onSubmit={this.handleSubmit} initialValues={{ name: "" }}>
        {({ handleSubmit, handleChange, values }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              name='name'
              label='Name'
              helperText='Enter your name to display on the leaderboard'
              autoFocus={true}
              value={values.name}
              onChange={event => {
                this.setState({ showError: false });
                handleChange(event);
              }}
            />
            <Button
              className={classes.submit}
              color='primary'
              type='submit'
              disabled={!values.name}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    );
  };

  handleSubmit = ({ name }) => {
    const { numDisks, time, onSubmit } = this.props;
    this.setState({ submitting: true }, () => {
      fetch(privateInfo.api_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update-high-scores",
          NumDisks: numDisks,
          name,
          time
        })
      })
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            this.setState({
              submitting: false
            });
            onSubmit();
          } else {
            this.setState({ submitting: false, showError: true });
            console.log(response.message);
          }
        })
        .catch(error => console.log("Unable to connect to API.", error));
    });
  };

  render() {
    const { classes, numDisks, time, onClose } = this.props;
    const { fetching, highScore, submitting, showError } = this.state;
    return (
      <div>
        <Dialog className={classes.root} open={true} onClose={onClose}>
          <DialogTitle>Your time is {formatTime(time)}!</DialogTitle>
          <DialogContent className={classes.content}>
            {fetching ? (
              <CircularProgress />
            ) : highScore ? (
              time < highScore.time ? (
                <div>
                  <div>
                    You beat the current high score of{" "}
                    <strong>{highScore.name}</strong> of{" "}
                    <strong>{formatTime(highScore.time)}</strong> for {numDisks}{" "}
                    disk(s).
                  </div>
                  <br />
                  {submitting ? (
                    <CircularProgress />
                  ) : (
                    this.renderTimeSubmitForm()
                  )}
                </div>
              ) : (
                <div>
                  <div>
                    You haven't beaten the current high score of{" "}
                    <strong>{highScore.name}</strong> of{" "}
                    <strong>{formatTime(highScore.time)}</strong> for {numDisks}{" "}
                    disk(s).
                  </div>
                  <p>Try again!</p>
                </div>
              )
            ) : (
              <div>
                <div>
                  There is no high score for now for {numDisks} disk(s).
                </div>
                <br />
                {submitting ? (
                  <CircularProgress />
                ) : (
                  this.renderTimeSubmitForm()
                )}
              </div>
            )}

            {showError && (
              <p className={classes.error}>
                Something went wrong. Try again later.
              </p>
            )}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(GameOver);