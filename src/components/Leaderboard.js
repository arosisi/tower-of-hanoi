import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

import { get1ToN, take, formatTime } from "../helpers";
import { constants } from "../constants";
import privateInfo from "../privateInfo";

const { DISK_COLORS } = constants;

const styles = {
  root: {
    textAlign: "center"
  },
  content: {
    marginBottom: 20
  },
  table: {
    width: "fit-content",
    maxHeight: 400
  },
  highlighted: {
    background: "rgba(0, 0, 0, 0.04)"
  },
  error: {
    color: "#f44336"
  }
};

class Leaderboard extends React.Component {
  state = { fetching: true, highScores: [], showError: false };

  componentDidMount() {
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
          this.setState({
            fetching: false,
            highScores: this.takeFive(
              response.sort(
                (
                  {
                    _id: _id1,
                    numDisks: numDisks1,
                    time: time1,
                    timeStamp: timeStamp1
                  },
                  {
                    _id: _id2,
                    numDisks: numDisks2,
                    time: time2,
                    timeStamp: timeStamp2
                  }
                ) =>
                  numDisks1 !== numDisks2
                    ? numDisks1 - numDisks2
                    : time1 !== time2
                    ? time1 - time2
                    : timeStamp1 !== timeStamp2
                    ? moment(timeStamp1).isBefore(moment(timeStamp2))
                    : _id1 < _id2
              )
            )
          });
        } else {
          this.setState({ fetching: false, showError: true });
          console.log("Failed to fetch high scores.");
        }
      })
      .catch(error => console.log("Unable to connect to API.", error));
  }

  takeFive = highScores => {
    const truncated = [];
    get1ToN(DISK_COLORS.length).forEach(numDisks => {
      const filtered = highScores.filter(
        highScore => highScore.numDisks === numDisks
      );
      if (filtered.length) {
        truncated.push(...take(filtered, 5));
      }
    });
    return truncated;
  };

  render() {
    const { classes, onClose } = this.props;
    const { fetching, highScores, showError } = this.state;
    return (
      <Dialog className={classes.root} open={true} onClose={onClose}>
        <DialogTitle>Leaderboard</DialogTitle>
        <DialogContent className={classes.content}>
          {fetching ? (
            <CircularProgress />
          ) : highScores.length ? (
            <TableContainer className={classes.table}>
              <Table stickyHeader size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>No. Disks</TableCell>
                    <TableCell align='right'>Name</TableCell>
                    <TableCell align='right'>Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {highScores.map(highScore => {
                    const { _id, numDisks, name, time } = highScore;
                    return (
                      <TableRow
                        key={_id}
                        className={
                          numDisks % 2 === 1 ? classes.highlighted : ""
                        }
                      >
                        <TableCell component='th' scope='row'>
                          {numDisks}
                        </TableCell>
                        <TableCell align='right'>{name}</TableCell>
                        <TableCell align='right'>{formatTime(time)}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            !showError && "There is no best time for now."
          )}

          {showError && (
            <div className={classes.error}>
              Something went wrong. Try again later.
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Leaderboard);
