import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Flex, styled } from "primithemes";
import { theme } from "../../theme";
import { FormattedMessage, injectIntl, InjectedIntlProps } from "react-intl";
import { Header } from "src/components/Header";
import { nav as navMessages } from "./Layout.messages";

import { Normalize } from "styled-normalize";
import { Head } from "./Head";
import { Footer } from "src/components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Root = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Content = styled(Flex)`
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Main = styled(Flex)`
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  background: ${props => props.theme.colors.background.main};
  flex-grow: 1;
`;

interface SettingsNode {
  node: {
    frontmatter: {
      title: string;
      phone: string;
      email: string;
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
  logo: any;
  logoWhite: any;
}

const nav = [
  { to: "/services", label: <FormattedMessage {...navMessages.services} /> },
  { to: "/contact", label: <FormattedMessage {...navMessages.contact} /> },
  { to: "/about", label: <FormattedMessage {...navMessages.about} /> },
];

export const BaseLayout: React.SFC<InjectedIntlProps> = ({
  children,
  intl,
}) => (
  <StaticQuery
    query={graphql`
      query Layout2Query {
        settings: allMarkdownRemark(
          filter: { fields: { type: { eq: "settings" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                phone
                email
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
        ({ node }) => node.fields.lang === intl.locale
      );
      if (!settings) throw `Settings could not be loaded for ${intl.locale}`;
      return (
        <ThemeProvider theme={theme}>
          <Root>
            <Normalize />
            <GlobalStyle />
            <Head title={settings.node.frontmatter.title} />
            <Content bg="background.main">
              <Header
                title={settings.node.frontmatter.title}
                navItems={nav}
                logo={null}
                phone={settings.node.frontmatter.phone}
              />
              <Main>{children}</Main>
              <Footer
                logo={null}
                email={settings.node.frontmatter.email}
                phone={settings.node.frontmatter.phone}
                title={settings.node.frontmatter.title}
              />
            </Content>
          </Root>
        </ThemeProvider>
      );
    }}
  />
);

export const Layout = injectIntl(BaseLayout);
