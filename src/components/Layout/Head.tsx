import * as React from "react";
import Helmet from "react-helmet";
import { injectIntl, InjectedIntlProps } from "react-intl";

interface Props {
  title: string;
}

const HeadBase: React.SFC<Props & InjectedIntlProps> = ({ intl, title }) => (
  <Helmet
    title={title}
    htmlAttributes={{ lang: intl.locale }}
    meta={[{ name: "description", content: title }]}
    link={[
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Muli:300,400,700",
      },
    ]}
  />
);

export const Head = injectIntl(HeadBase);
