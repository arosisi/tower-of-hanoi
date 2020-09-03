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
  state = {
    timeStamp: moment(),
    numLikes: null,
    updatingLikes: false,
    liked: false,
    likeId: null
  };

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

  updateLikes = () => {
    const { timeStamp, numLikes, liked } = this.state;

    this.setState({ updatingLikes: true });

    if (!liked) {
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
          if (response._id) {
            this.setState({
              numLikes: numLikes + 1,
              updatingLikes: false,
              liked: true,
              likeId: response._id
            });
          } else {
            console.log("Failed to add like.");
          }
        })
        .catch(error => console.log("Unable to connect to API.", error));
    } else {
      fetch(`${privateInfo.like_api_endpoint}/${this.state.likeId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "x-apikey": privateInfo.like_api_key,
          "cache-control": "no-cache"
        }
      })
        .then(response => response.json())
        .then(({ result }) => {
          if (Array.isArray(result) && result.length) {
            this.setState({
              numLikes: numLikes - 1,
              updatingLikes: false,
              liked: false,
              likeId: null
            });
          } else {
            console.log("Failed to remove like.");
          }
        })
        .catch(error => console.log("Unable to connect to API.", error));
    }
  };

  render() {
    const { classes } = this.props;
    const { numLikes, updatingLikes, liked } = this.state;
    return (
      <div className={classes.root}>
        {numLikes !== null ? (
          <div className={classes.counter}>
            {numLikes}
            <IconButton size='small' onClick={this.updateLikes}>
              {updatingLikes ? (
                <CircularProgress color='secondary' size={20} />
              ) : liked ? (
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
