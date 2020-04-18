import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
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
    highScores: [],
    submitting: false,
    showError: false
  };

  componentDidMount() {
    const { numDisks, enableScroll } = this.props;
    enableScroll();

    fetch(privateInfo.high_score_api_endpoint, {
      headers: {
        "content-type": "application/json",
        "x-apikey": privateInfo.high_score_api_key,
        "cache-control": "no-cache"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (Array.isArray(response)) {
          const highScores = response.filter(
            highScore => highScore.numDisks === numDisks
          );
          this.setState({
            fetching: false,
            highScores: highScores.sort(
              (
                { _id: _id1, time: time1, timeStamp: timeStamp1 },
                { _id: _id2, time: time2, timeStamp: timeStamp2 }
              ) =>
                time1 !== time2
                  ? time1 - time2
                  : timeStamp1 !== timeStamp2
                  ? moment(timeStamp1).isBefore(moment(timeStamp2))
                  : _id1 < _id2
            )
          });
        } else {
          this.setState({ fetching: false });
          console.log("Failed to fetch high scores.");
        }
      })
      .catch(error => console.log("Unable to connect to API.", error));
  }

  getCongratsMessage = () => {
    const { numDisks, time } = this.props;
    const { highScores } = this.state;
    const position =
      time < highScores[0].time
        ? ""
        : !highScores[1] || time < highScores[1].time
        ? "2nd"
        : !highScores[2] || time < highScores[2].time
        ? "3rd"
        : !highScores[3] || time < highScores[3].time
        ? "4th"
        : "5th";
    return (
      <div>
        You have the <strong>{position}</strong>
        {position ? " " : ""}best time for {numDisks} disk(s).
      </div>
    );
  };

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
    const { numDisks, time, timeStamp, onSubmit } = this.props;
    this.setState({ submitting: true }, () => {
      fetch(privateInfo.high_score_api_endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-apikey": privateInfo.high_score_api_key,
          "cache-control": "no-cache"
        },
        body: JSON.stringify({
          numDisks: numDisks,
          name,
          time,
          timeStamp
        })
      })
        .then(response => response.json())
        .then(response => {
          if (response._id) {
            this.setState({
              submitting: false
            });
            onSubmit();
          } else {
            this.setState({ submitting: false, showError: true });
            console.log("Failed to update high scores.");
          }
        })
        .catch(error => console.log("Unable to connect to API.", error));
    });
  };

  render() {
    const { classes, numDisks, time, onClose } = this.props;
    const { fetching, highScores, submitting, showError } = this.state;
    return (
      <div>
        <Dialog className={classes.root} open={true} onClose={onClose}>
          <DialogTitle>Your time is {formatTime(time)}!</DialogTitle>
          <DialogContent className={classes.content}>
            {fetching ? (
              <CircularProgress />
            ) : highScores.length ? (
              highScores.length < 5 || time < highScores[4].time ? (
                <div>
                  {this.getCongratsMessage()}
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
                    You haven't beaten the 5th best time of{" "}
                    <strong>{highScores[4].name}</strong> of{" "}
                    <strong>{formatTime(highScores[4].time)}</strong> for{" "}
                    {numDisks} disk(s).
                  </div>
                  <p>Try again!</p>
                </div>
              )
            ) : (
              <div>
                <div>There is no best time for now for {numDisks} disk(s).</div>
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
