import * as React from "react";
import { LangsContainer } from "./LangsContainer";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({palette, spacing}: Theme) => createStyles({
  list: {
    color: palette.common.white,
    display: "flex",
    justifyContent: "center",
  },
  item: {
    opacity: 0.4,
  },
  selected: {
    opacity: 1,
  },
  text: {
    flexShrink: 0,
    padding: 0,
  }
});

type Props = WithStyles<typeof styles>;

export const UnstyledFooterLangs: React.SFC<Props> = ({ classes }) => {
  return (
    <LangsContainer classes={classes}/>
  );
}

export const FooterLangs = withStyles(styles)(UnstyledFooterLangs);
