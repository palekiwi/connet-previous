import * as React from "react";
import { LangsContainer } from "./LangsContainer";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({palette, spacing}: Theme) => createStyles({
  list: {
    color: palette.grey[700],
    display: "flex",
    justifyContent: "center",
  },
  item: {
    width: "auto",
    padding: "0.2rem 0.4rem",
    cursor: "pointer",
    flexShrink: 0,
    opacity: 0.5,
    ["&:hover"]: {
      opacity: 1,
    },
  },
  selected: {
    opacity: 1,
  },
  text: {
    padding: 0,
    texAlign: "center",
  }
});

type Props = WithStyles<typeof styles>;

export const UnstyledHeaderLangs: React.SFC<Props> = ({ classes }) => {
  return (
    <LangsContainer classes={classes}/>
  );
}

export const HeaderLangs = withStyles(styles)(UnstyledHeaderLangs);
