import * as React from "react";
import { Link as BaseLink } from "../../i18n";
import styled, { css } from "styled-components";

interface Props {
  to: string;
  styled?: boolean;
  onClick?(): void;
}

export const Link = styled(({ styled, ...props }) => <BaseLink {...props} />)<
  Props
>`
  ${props =>
    props.styled &&
    css`
      font-weight: ${props => props.theme.fontWeights[6]};
      color: ${props => props.theme.colors.text.dark};
      &:hover {
        color: ${props => props.theme.colors.text.light};
      }
    `};
`;
