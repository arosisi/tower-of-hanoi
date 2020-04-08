import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { formatTime } from "../helpers";

const styles = {
  time: {
    width: "fit-content",
    margin: "auto",
    cursor: "pointer"
  },
  warning: {
    marginTop: 10
  }
};

class Timer extends React.Component {
  state = { handler: null, millisecs: 0 };

  componentDidUpdate(prevProps) {
    if (!prevProps.running && this.props.running) {
      const handler = setInterval(() => {
        const { millisecs } = this.state;
        this.setState({ millisecs: millisecs + 1 });
      }, 1);
      this.setState({ handler });
    }

    if (prevProps.running && !this.props.running) {
      const { handler } = this.state;
      clearInterval(handler);

      if (!prevProps.disabled && !this.props.disabled) {
        this.props.recordTime(this.state.millisecs);
      }
    }
  }

  componentWillUnmount() {
    const { handler } = this.state;
    clearInterval(handler);
  }

  render() {
    const { classes, disabled, recordTime } = this.props;
    const { millisecs } = this.state;
    return (
      <div style={{ color: disabled ? "#f44336" : "inherit" }}>
        <div className={classes.time} onClick={() => recordTime(millisecs)}>
          {formatTime(millisecs)}
        </div>
        {disabled && (
          <div className={classes.warning}>Time is now invalid!</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Timer);
