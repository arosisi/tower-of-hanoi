import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton
} from "react-share";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  content: {
    marginBottom: 20,
    "& > *": {
      marginRight: 5
    }
  },
  button: {
    outline: "none"
  }
};

class Share extends React.Component {
  render() {
    const { classes, onClose } = this.props;
    return (
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Share</DialogTitle>
        <DialogContent className={classes.content}>
          <FacebookShareButton
            className={classes.button}
            url='https://arosisi.github.io/tower-of-hanoi'
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            className={classes.button}
            url='https://arosisi.github.io/tower-of-hanoi'
            title='Tower of Hanoi'
            hashtags={["game", "puzzle", "brainteaser", "towerofhanoi"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <WhatsappShareButton
            className={classes.button}
            url='https://arosisi.github.io/tower-of-hanoi'
            title='Tower of Hanoi'
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <LinkedinShareButton
            className={classes.button}
            url='https://arosisi.github.io/tower-of-hanoi'
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <RedditShareButton
            className={classes.button}
            style={{ marginRight: 0 }}
            url='https://arosisi.github.io/tower-of-hanoi'
            title='Tower of Hanoi'
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Share);
