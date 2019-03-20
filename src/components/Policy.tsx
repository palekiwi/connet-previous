import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  snackbar: {
    width: "100%",
    borderRadius: 0,
  },
  content: {
    maxWidth: 800,
    color: theme.palette.common.white,
  },
});

interface State {
  open: boolean;
}

type Props = WithStyles<typeof styles>;

class Policy extends React.Component<Props, State> {
  state: State = {
    open: false,
  };

  componentDidMount() {
    const policy = window.localStorage.getItem("cookies-policy");
    if (!(policy && policy === "accepted")) {
      this.setState({open: true});
    }
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleAccept = () => {
    window.localStorage.setItem("cookies-policy", "accepted");
    this.setState({open: false});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          className={classes.snackbar}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={
            <div className={classes.content}>
              <Typography variant="body2" color="inherit">
                Utilizamos cookies propias y de terceros para realizar análisis de uso y medición de nuestra web para mejorar nuestros servicios.
              </Typography>
            </div>
          }
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleAccept}>
              Acepto
            </Button>,
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Policy);
