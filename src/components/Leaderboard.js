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
import moment from "moment";

class Leaderboard extends React.Component {
  render() {
    const { open, fetching, highScores, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Leaderboard</DialogTitle>
        <DialogContent>
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
                  const duration = moment.duration(time, "seconds");
                  return (
                    <TableRow key={highScore.NumDisks}>
                      <TableCell component='th' scope='row'>
                        {highScore.NumDisks}
                      </TableCell>
                      <TableCell align='right'>{highScore.name}</TableCell>
                      <TableCell align='right'>
                        {Math.floor(duration.asHours()) +
                          moment
                            .utc(duration.asMilliseconds())
                            .format(":mm:ss")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            "There are no high scores for now."
          )}
        </DialogContent>
      </Dialog>
    );
  }
}

export default Leaderboard;
