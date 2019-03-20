import * as React from "react";
import { LangContext } from "../contexts/lang-context";

interface WithLangProps {
  lang: string;
}

const withLang = <P extends object>(
  Component: React.ComponentType<P & WithLangProps>,
): React.SFC<P & WithLangProps> => (props) => (
  <LangContext.Consumer>
    {(lang: Lang) =>
      <Component lang={lang} {...props}/>
    }
  </LangContext.Consumer>
);

export default withLang;
