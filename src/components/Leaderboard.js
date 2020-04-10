import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
  error: {
    color: "#f44336"
  }
};

class Leaderboard extends React.Component {
  state = { fetching: true, highScores: [], showError: false };

  componentDidMount() {
    fetch(privateInfo.api_endpoint, {
      headers: {
        "content-type": "application/json",
        "x-apikey": privateInfo.api_key,
        "cache-control": "no-cache"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (Array.isArray(response)) {
          this.setState({
            fetching: false,
            highScores: response.sort(
              ({ numDisks: numDisks1 }, { numDisks: numDisks2 }) =>
                numDisks1 - numDisks2
            )
          });
        } else {
          this.setState({ fetching: false, showError: true });
          console.log("Failed to fetch.");
        }
      })
      .catch(error => console.log("Unable to connect to API.", error));
  }

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
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>No. Disks</TableCell>
                  <TableCell align='right'>Name</TableCell>
                  <TableCell align='right'>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {highScores.map(highScore => {
                  const { time } = highScore;
                  return (
                    <TableRow key={highScore.numDisks}>
                      <TableCell component='th' scope='row'>
                        {highScore.numDisks}
                      </TableCell>
                      <TableCell align='right'>{highScore.name}</TableCell>
                      <TableCell align='right'>{formatTime(time)}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            !showError && "There are no high scores for now."
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
