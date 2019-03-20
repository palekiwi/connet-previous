import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { languages } from "../../i18n";
import { styled, Box, Flex } from "primithemes";
import { Link } from "gatsby";
import { Text } from "src/components/Text";

export type LangsContainerProps = {} & InjectedIntlProps;

const LangItem = styled(Box)`
  &:hover {
    background: ${props => props.theme.colors.grey[100]};
  }
`;

export const LangsContainer = injectIntl(
  class Container extends React.Component<LangsContainerProps, {}> {
    handleClick = (code: string) => {
      localStorage.setItem("language", code);
    };

    isActive = (code: string) => this.props.intl.locale === code;

    render() {
      return (
        <Flex>
          {languages.map(({ name, code }) => (
            <Link
              key={code}
              to={"/" + code}
              onClick={() => this.handleClick(code)}
            >
              <LangItem p={2}>
                <Text
                  fontSize={1}
                  color={this.isActive(code) ? "text.dark" : "text.light"}
                >
                  {name}
                </Text>
              </LangItem>
            </Link>
          ))}
        </Flex>
      );
    }
  }
);
