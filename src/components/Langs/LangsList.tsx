import * as React from "react";
import classNames from "classnames";
import { Language } from "../../i18n/locales";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export interface LangsListClasses {
  list?: string;
  item?: string;
  text?: string;
  selected?: string;
};

export interface LangsListProps {
  handleClick(code:string): void;
  languages: Language[];
  locale: string;
  classes: LangsListClasses;
}

export const LangsList: React.SFC<LangsListProps> = ({
  classes, handleClick, languages, locale
}) => {
  return (
    <List
      dense
      disablePadding
      className={classes.list}
      component={"nav"}
    >
      {languages.map((x) =>
        <ListItem
          className={
            (x.code === locale ? classNames(classes.item, classes.selected) : classes.item)
          }
          key={x.code}
          onClick={() => handleClick(x.code)}
        >
          <ListItemText
            primary={x.name}
            className={classes.text}
            primaryTypographyProps={
              {color: "inherit"}
            }
          />
        </ListItem>
      )}
    </List>
  );
};

LangsList.defaultProps = {
  classes: {
    list: "",
    item: "",
    text: "",
    selected: "",
  }
}
