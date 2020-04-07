import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import { get1ToN } from "../helpers";
import { constants } from "../constants";

const { DISK_COLORS } = constants;
const maxNumDisks = DISK_COLORS.length;

const styles = {
  root: {
    marginTop: 30
  },
  submit: {
    marginTop: 10
  }
};

class Initializer extends React.Component {
  state = { error: false };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const numDisks = parseInt(data.get("numDisks"));
    if (get1ToN(maxNumDisks).includes(numDisks)) {
      this.props.setNumDisks(numDisks);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <div className={classes.root}>
        <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
          <TextField
            name='numDisks'
            label='Number of Disks'
            helperText={`Enter a number up to ${maxNumDisks}`}
            autoFocus={true}
            error={error}
          />
          <br />
          <Button className={classes.submit} color='primary' type='submit'>
            Go
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Initializer);
