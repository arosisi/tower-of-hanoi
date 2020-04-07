import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  content: {
    marginTop: -20,
    marginBottom: 20
  }
};

class Info extends React.Component {
  state = { open: false, showInfo: false };

  render() {
    const { classes, onClose } = this.props;
    return (
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>About the game</DialogTitle>
        <DialogContent className={classes.content}>
          <ul>
            <li>
              The objective is to move the stack of disks from the left column
              to either of the other two columns.
            </li>
            <li>
              Drag and drop a disk to move it. You can only move one disk at a
              time and it must be the disk on top.
            </li>
            <li>Larger disks cannot be placed on top of smaller disks.</li>
          </ul>
          <p>
            Read more about the game{" "}
            <a
              href='https://en.wikipedia.org/wiki/Tower_of_Hanoi'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
            .
          </p>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Info);
