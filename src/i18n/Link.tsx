import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { Link } from "gatsby";

export interface I18nLinkProps extends InjectedIntlProps {
  to: string;
  className?: string;
  activeStyle?: object;
}

export const I18nLink: React.SFC<I18nLinkProps> = ({
  to,
  intl,
  children,
  ...rest
}) => {
  const { locale } = intl;
  const toWithLang = locale ? `/${locale}${to}` : to;
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  if (internal && !file) {
    return (
      <Link activeClassName="active" to={toWithLang} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};

export default injectIntl(I18nLink);
