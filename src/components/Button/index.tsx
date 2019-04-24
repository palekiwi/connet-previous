import * as React from "react";
import styled, { css } from "styled-components";
import { radius, space, color } from "src/theme";

import { Link } from "../../i18n";

export interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white";
  contained?: boolean;
  round?: boolean;
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
  round,
  variant,
  activeClassName,
  ...props
}) => {
  if (to) return <Link to={to} {...props} />;
  return <button {...props} />;
};

const defaultStyle = css<ButtonProps>`
  cursor: pointer;
  display: inline-block;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${radius(2)};
  background: transparent;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  transition: all 400ms cubic-bezier(0.08, 0.52, 0.52, 1);
  padding: ${space(2)} ${space(3)};
  &:hover {
    background: ${color("divider.light")};
  }
  &:active {
    outline: none;
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("divider.light")};
      &:hover {
        background: ${color("divider.light")};
      }
      &:focus {
        outline: none;
      }
    `}
  ${props =>
    props.contained &&
    css`
      border-color: transparent;
      background: ${color("divider.dark")};
      color: ${color("text.dark")};
      &:hover {
        background: ${color("divider.main")};
      }
    `}
`;

const primary = css<ButtonProps>`
  color: ${color("primary.main")};
  &:hover {
    background: ${color("divider.dark")};
    color: ${color("primary.dark")};
  }
  &:focus {
    background: ${color("grey.200")};
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("primary.main")};
      &:hover {
        background: ${color("primary.main")};
        color: ${color("white.light")};
      }
      &:focus {
        outline: none;
      }
    `}
  ${props =>
    props.contained &&
    css`
      border-color: ${color("primary.main")};
      background: ${color("primary.main")};
      color: ${color("white.main")};
      &:hover {
        background: ${color("primary.light")};
        color: ${color("white.main")};
        border-color: ${color("primary.light")};
      }
    `}
`;

const secondary = css<ButtonProps>`
  color: ${color("secondary.main")};
  &:hover {
    background: ${color("divider.light")};
    color: ${color("secondary.dark")};
  }
  &:focus {
    background: ${color("grey.200")};
  }
  ${props =>
    props.outlined &&
    css`
      border-color: ${color("secondary.main")};
      &:hover {
        background: ${color("secondary.main")};
        color: ${color("white.light")};
      }
      &:focus {
        outline: none;
      }
    `}
  ${props =>
    props.contained &&
    css`
      border-color: ${color("secondary.main")};
      background: ${color("secondary.main")};
      color: ${color("white.light")};
      &:hover {
        background: ${color("secondary.light")};
        color: ${color("white.main")};
        border-color: ${color("secondary.light")};
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
  padding: $space(1)} $space(2)};
`;

const large = css<ButtonProps>`
  padding: ${space(3)} ${space(3)};
`;

const round = css<ButtonProps>`
  padding: 0;
  text-align: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const Button = styled(ButtonLink)<ButtonProps>`
  ${defaultStyle}
  ${props => props.variant === "primary" && primary}
  ${props => props.variant === "secondary" && secondary}
  ${props => props.variant === "white" && white}
  ${props => props.small && small}
  ${props => props.large && large}
  ${props => props.round && round}
`;

export { Button };
