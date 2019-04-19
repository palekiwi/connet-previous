import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { color } from "src/theme";
import { FormattedMessage } from "react-intl";
import { nav as navMessages } from "./Layout.messages";
import { IntlProvider, addLocaleData } from "react-intl";
import { localeData } from "src/i18n/locales";
import { Policy } from "src/components/Policy";
import { fonts } from "src/theme";

import { Normalize } from "styled-normalize";
import { Head } from "src/components/Head";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

addLocaleData(localeData);

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    font-family: ${fonts.sans};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Root = styled.div`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  background: ${color("background.main")};
  flex-grow: 1;
`;

interface Contact {
  phone: string;
  email: string;
}

interface SettingsNode {
  node: {
    frontmatter: {
      title: string;
      contacts: Contact[];
    };
    fields: {
      lang: string;
    };
  };
}

interface Data {
  settings: {
    edges: SettingsNode[];
  };
  cookiePolicy: {
    edges: {
      node: {
        fields: {
          lang: string;
        };
        html: string;
      };
    }[];
  };
}

const nav = [
  { to: "/services", label: <FormattedMessage {...navMessages.services} /> },
  { to: "/contact", label: <FormattedMessage {...navMessages.contact} /> },
  { to: "/about", label: <FormattedMessage {...navMessages.about} /> },
];

interface Props {
  pageContext: {
    locale: string;
  };
}

export const Layout: React.SFC<Props> = ({ children, ...props }) => {
  const locale = props.pageContext.locale || "en";
  const messages = require(`src/i18n/translations/${locale}.json`);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          cookiePolicy: allMarkdownRemark(
            filter: { fields: { pageName: { eq: "cookie-policy" } } }
          ) {
            edges {
              node {
                html
                fields {
                  lang
                }
              }
            }
          }
          settings: allMarkdownRemark(
            filter: { fields: { type: { eq: "settings" } } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  contacts {
                    phone
                    email
                  }
                }
                fields {
                  lang
                }
              }
            }
          }
        }
      `}
      render={(data: Data) => {
        const settings = data.settings.edges.find(
          ({ node }) => node.fields.lang === locale
        );
        const cookiePolicy = data.cookiePolicy.edges.find(
          ({ node }) => node.fields.lang === locale
        );
        if (!settings || !cookiePolicy)
          throw `Settings could not be loaded for ${locale}`;
        return (
          <IntlProvider locale={locale} messages={messages}>
            <Root>
              <Normalize />
              <GlobalStyle />
              <Head title={settings.node.frontmatter.title} />
              <Content>
                <Policy content={cookiePolicy.node} />
                <Header
                  title={settings.node.frontmatter.title}
                  navItems={nav}
                  logo={null}
                />
                <Main>{children}</Main>
                <Footer
                  logo={null}
                  email={settings.node.frontmatter.contacts[0].email}
                  phone={settings.node.frontmatter.contacts[0].phone}
                  title={settings.node.frontmatter.title}
                />
              </Content>
            </Root>
          </IntlProvider>
        );
      }}
    />
  );
};

export default Layout;
