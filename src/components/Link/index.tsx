import { Link as BaseLink } from "../../i18n";
import { css, styled, TextProps } from "primithemes";

interface Props extends TextProps {
  to: string;
  styled?: boolean;
  onClick?(): void;
  children: any;
}

export const Link = styled(BaseLink)<Props>`
  ${props =>
    props.styled &&
    css`
      color: ${props => props.theme.colors.secondary.light};
      &:hover {
        color: ${props => props.theme.colors.secondary.dark};
      }
    `};
`;
