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
  state = { handler: null, seconds: 0 };

  componentDidUpdate(prevProps) {
    if (!prevProps.running && this.props.running) {
      const handler = setInterval(() => {
        const { seconds } = this.state;
        this.setState({ seconds: seconds + 1 });
      }, 1000);
      this.setState({ handler });
    }

    if (prevProps.running && !this.props.running) {
      const { handler } = this.state;
      clearInterval(handler);

      if (!prevProps.disabled && !this.props.disabled) {
        this.props.recordTime(this.state.seconds);
      }
    }
  }

  componentWillUnmount() {
    const { handler } = this.state;
    clearInterval(handler);
  }

  render() {
    const { classes, disabled, recordTime } = this.props;
    const { seconds } = this.state;
    return (
      <div style={{ color: disabled ? "#f44336" : "inherit" }}>
        <div className={classes.time} onClick={() => recordTime(seconds)}>
          {formatTime(seconds)}
        </div>
        {disabled && (
          <div className={classes.warning}>Time is now invalid!</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Timer);
