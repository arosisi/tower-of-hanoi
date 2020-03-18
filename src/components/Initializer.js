import React from "react";
import TextField from "@material-ui/core/TextField";

import { get1ToN } from "../helpers";
import { constants } from "../constants";

const { DISK_COLORS } = constants;
const maxNumDisks = DISK_COLORS.length;

class Initializer extends React.Component {
  state = { error: false };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const numDisks = data.get("numDisks");
    if (get1ToN(maxNumDisks).includes(parseInt(numDisks))) {
      this.props.setNumDisks(numDisks);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div style={{ marginTop: 30 }}>
        <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
          <TextField
            name='numDisks'
            label='Number of Disks'
            helperText={`Enter a number up to ${maxNumDisks}`}
            autoFocus={true}
            error={error}
          />
        </form>
      </div>
    );
  }
}

export default Initializer;
