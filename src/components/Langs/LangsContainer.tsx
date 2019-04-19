import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { languages } from "../../i18n";
import styled from "styled-components";
import { Link } from "gatsby";
import { color, space } from "src/theme";

export type LangsContainerProps = {} & InjectedIntlProps;

const Wrapper = styled.div`
  display: flex;
`;
const LangItem = styled.div<{ active: boolean }>`
  padding: ${space(2)};
  &:hover {
    background: ${color("grey.100")};
  }
  color: ${props => (props.active ? color("text.dark") : color("text.light"))};
`;

export const LangsContainer = injectIntl(
  class Container extends React.Component<LangsContainerProps, {}> {
    handleClick = (code: string) => {
      localStorage.setItem("language", code);
    };

    isActive = (code: string) => this.props.intl.locale === code;

    render() {
      return (
        <Wrapper>
          {languages.map(({ name, code }) => (
            <Link
              key={code}
              to={"/" + code}
              onClick={() => this.handleClick(code)}
            >
              <LangItem active={this.isActive(code)}>{name}</LangItem>
            </Link>
          ))}
        </Wrapper>
      );
    }
  }
);
