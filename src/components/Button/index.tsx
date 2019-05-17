import * as React from "react";
import styled, { css } from "styled-components";
import { transition, radius, space, color } from "src/theme";
import { longPrimer, brevier, greatPrimer } from "src/theme/typography";
import { Link } from "src/components/Link";

export interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white" | "default";
  contained?: boolean;
  outlined?: boolean;
  small?: boolean;
  large?: boolean;
  style?: any;
  onClick?(): void;
  activeClassName?: string;
}

const ButtonLink: React.SFC<ButtonProps> = ({
  to,
  contained,
  outlined,
  small,
  large,
  variant,
  activeClassName,
  ...props
}) => {
  if (to) return <Link to={to} {...props} />;
  return <button {...props} />;
};

const defaultStyle = css<ButtonProps>`
  ${longPrimer};
  margin: 0;
  vertical-align: baseline;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${radius(2)};
  background: transparent;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  transition: all ${transition};
  padding: ${space(2)} ${space(3)};
  &:hover {
    background: ${color("divider.light")};
  }
  &:active,
  &:focus {
    outline: none;
    background: ${color("divider.light")};
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("divider.light")};
      &:hover {
        background: ${color("divider.light")};
      }
    `}
  ${props =>
    props.contained &&
    css`
      border-color: transparent;
      background: ${color("divider.light")};
      color: ${color("text.dark")};
      &:hover {
        background: ${color("divider.main")};
      }
    `}
`;

const primary = css<ButtonProps>`
  color: ${color("primary.main")};
  &:hover {
    color: ${color("primary.dark")};
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("primary.main")};
      &:hover {
        background: ${color("primary.main")};
        color: ${color("white.light")};
      }
    `}
  ${props =>
    props.contained &&
    css`
      border-color: ${color("primary.main")};
      background: ${color("primary.main")};
      color: ${color("white.light")};
      &:hover,
      &:focus {
        background: ${color("primary.dark")};
        color: ${color("white.light")};
        border-color: ${color("primary.dark")};
      }
    `}
`;

const secondary = css<ButtonProps>`
  color: ${color("secondary.main")};
  &:hover {
    color: ${color("secondary.dark")};
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("secondary.main")};
      &:hover {
        background: ${color("secondary.main")};
        color: ${color("white.light")};
      }
    `}
  ${props =>
    props.contained &&
    css`
      border-color: ${color("secondary.main")};
      background: ${color("secondary.main")};
      color: ${color("white.light")};
      &:hover,
      &:focus {
        background: ${color("secondary.dark")};
        color: ${color("white.light")};
        border-color: ${color("secondary.dark")};
      }
    `}
`;

const white = css<ButtonProps>`
  color: ${props => color("white.main")};
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: ${props => color("white.light")};
  }
  &:focus {
    background: ${color("white.dark")};
    color: ${color("white.contrast")};
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("white.light")};
      &:hover {
        background: ${color("white.light")};
        color: ${color("white.contrast")};
      }
      &:focus {
        outline: none;
      }
    `}
  ${props =>
    props.contained &&
    css`
      background: ${color("white.light")};
      border-color: ${color("white.light")};
      color: ${color("white.contrast")};
      &:hover {
        background: ${color("white.main")};
        color: ${color("white.contrast")};
      }
    `}
`;

const small = css<ButtonProps>`
  ${brevier};
  margin: 0;
  padding: ${space(1)} ${space(2)};
`;

const large = css<ButtonProps>`
  ${greatPrimer};
  margin: 0;
  padding: ${space(3)} ${space(4)};
`;

const Button = styled(ButtonLink)<ButtonProps>`
  ${defaultStyle};
  ${props => props.small && small};
  ${props => props.large && large};
  ${props => props.variant === "primary" && primary};
  ${props => props.variant === "secondary" && secondary};
  ${props => props.variant === "white" && white};
`;

export { Button };
