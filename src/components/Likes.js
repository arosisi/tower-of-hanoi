import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import LikedIcon from "@material-ui/icons/Favorite";
import UnlikedIcon from "@material-ui/icons/FavoriteBorder";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

import privateInfo from "../privateInfo";

const styles = {
  root: {
    position: "absolute",
    top: 30,
    right: 30,
    zIndex: 1
  },
  counter: {
    display: "flex",
    alignItems: "center"
  }
};

class Likes extends React.Component {
  state = { numLikes: null, timeStamp: null };

  componentDidMount() {
    fetch(privateInfo.like_api_endpoint, {
      headers: {
        "content-type": "application/json",
        "x-apikey": privateInfo.like_api_key,
        "cache-control": "no-cache"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (Array.isArray(response)) {
          this.setState({ numLikes: response.length });
        } else {
          console.log("Failed to fetch likes.");
        }
      })
      .catch(error => console.log("Unable to connect to API.", error));
  }

  componentWillUnmount() {
    const { timeStamp } = this.state;
    if (timeStamp) {
      fetch(privateInfo.like_api_endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-apikey": privateInfo.like_api_key,
          "cache-control": "no-cache"
        },
        body: JSON.stringify({ timeStamp })
      })
        .then(response => response.json())
        .then(response => {
          if (!response._id) {
            console.log("Failed to update likes.");
          }
        })
        .catch(error => console.log("Unable to connect to API.", error));
    }
  }

  render() {
    const { classes } = this.props;
    const { numLikes, timeStamp } = this.state;
    return (
      <div className={classes.root}>
        {numLikes !== null ? (
          <div className={classes.counter}>
            {numLikes + !!timeStamp}
            <IconButton
              size='small'
              onClick={() =>
                this.setState({
                  timeStamp: !timeStamp ? moment() : null
                })
              }
            >
              {timeStamp ? (
                <LikedIcon color='secondary' fontSize='small' />
              ) : (
                <UnlikedIcon color='secondary' fontSize='small' />
              )}
            </IconButton>
          </div>
        ) : (
          <CircularProgress color='secondary' size={24} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Likes);
