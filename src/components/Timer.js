import React from "react";
import moment from "moment";
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
  state = { handler: null, start: null, millisecs: 0, timeStamp: null };

  componentDidUpdate(prevProps) {
    if (!prevProps.running && this.props.running) {
      const handler = setInterval(() => {
        const now = moment();
        const start = this.state.start || now;
        const millisecs = now.diff(start);
        this.setState({ start, millisecs });
      }, 10);
      this.setState({ handler });
    }

    if (prevProps.running && !this.props.running) {
      const { handler } = this.state;
      clearInterval(handler);

      const timeStamp = moment();

      this.setState({ timeStamp });

      if (!prevProps.disabled && !this.props.disabled) {
        this.props.recordTime(this.state.millisecs, timeStamp);
      }
    }
  }

  componentWillUnmount() {
    const { handler } = this.state;
    clearInterval(handler);
  }

  render() {
    const { classes, disabled, recordTime } = this.props;
    const { millisecs, timeStamp } = this.state;
    return (
      <div style={{ color: disabled ? "#f44336" : "inherit" }}>
        <div
          className={classes.time}
          onClick={() => recordTime(millisecs, timeStamp)}
        >
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
