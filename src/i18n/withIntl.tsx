import * as React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { localeData } from "./locales";

addLocaleData(localeData);

interface WithLocaleProps {
  pageContext: {
    languages: Array<{value: string, name: string}>,
    locale: string,
  };
}

export const withIntl = <P extends object>(Component: React.ComponentType<P>) =>
  class WithIntl extends React.Component<P & WithLocaleProps> {
    render() {
    const locale = this.props.pageContext.locale || "en";
    const messages = require(`./translations/${locale}.json`);

    return (
      <IntlProvider locale={locale} messages={messages}>
        <Component {...this.props} />
      </IntlProvider>
    ); }
  };
