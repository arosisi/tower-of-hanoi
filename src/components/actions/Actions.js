import React from "react";
import BugReportIcon from "@material-ui/icons/BugReportOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ShareIcon from "@material-ui/icons/Share";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { withStyles } from "@material-ui/core/styles";

import Info from "./Info";
import ReportBug from "./ReportBug";

const styles = {
  actions: {
    position: "absolute",
    top: 15,
    left: 15
  }
};

class Actions extends React.Component {
  state = { open: false, showInfo: false, showReportBug: false };

  render() {
    const { classes, show } = this.props;
    const { open, showInfo, showReportBug } = this.state;
    return (
      <div>
        <SpeedDial
          ariaLabel='Actions'
          className={classes.actions}
          icon={<SpeedDialIcon />}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={open}
          direction='down'
        >
          <SpeedDialAction
            icon={<FavoriteIcon />}
            tooltipTitle={"Like"}
            tooltipPlacement='right'
            onClick={() => this.setState({ open: false })}
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle={"Share"}
            tooltipPlacement='right'
            onClick={() => this.setState({ open: false })}
          />
          <SpeedDialAction
            icon={<InfoIcon />}
            tooltipTitle={"Info"}
            tooltipPlacement='right'
            onClick={() => {
              show();
              this.setState({ open: false, showInfo: true });
            }}
          />
          <SpeedDialAction
            icon={<BugReportIcon />}
            tooltipTitle={"Report Bug"}
            tooltipPlacement='right'
            onClick={() => {
              show();
              this.setState({ open: false, showReportBug: true });
            }}
          />
        </SpeedDial>

        {showInfo && (
          <Info onClose={() => this.setState({ showInfo: false })} />
        )}
        {showReportBug && (
          <ReportBug onClose={() => this.setState({ showReportBug: false })} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Actions);
