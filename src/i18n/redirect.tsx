import * as React from "react";
import { navigate } from "gatsby";
import { languages } from "./index";

interface RedirectProps {
  location: any;
}

class Redirect extends React.PureComponent<RedirectProps, {}> {
  componentDidMount() {
    if (typeof window !== "undefined") {
      const { pathname } = this.props.location;
      const detected = localStorage.getItem("language") ||
        guardLanguage(
          languages,
          navigator.language.split(/[-_]/)[0],
        );

      const newUrl = `/${detected}${pathname}`;
      window.localStorage.setItem("language", detected);
      navigate(newUrl);
    }
  }

  render() {
    return <div/>;
  }
}

export default Redirect;

function guardLanguage(xs: string[], y: string) {
  return xs.indexOf(y) > -1 ? y : "en";
}
