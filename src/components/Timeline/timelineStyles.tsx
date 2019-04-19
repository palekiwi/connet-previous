import { color, space, radius } from "src/theme";
import styled, { css } from "styled-components";
import { phone, desktop } from "src/theme/media";

export const Line = styled.div`
  background: ${color("grey.200")};
  width: 100%;
  padding: ${space(3)};
  position: relative;
  &::before {
    content: "";
    background: ${color("grey.500")};
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0%;
    margin-left: 16px;
    transform: translateX(-50%);
    ${desktop(css`
      left: 50%;
      margin-left: 0;
    `)}
  }
`;

export const Marker = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 14px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${color("grey.300")};
  border: 4px solid ${color("grey.200")};
`;

export const WrapperLeft = css`
  left: 0%;
  padding-right: 40px;
  padding-left: 0px;
  ${Marker} {
    left: 100%;
  }
`;

export const WrapperRight = css`
  left: 50%;
  padding-left: 40px;
  padding-right: 0px;
  ${Marker} {
    left: 0;
  }
`;

interface Props {
  i: number;
}

export const Wrapper = styled.div<Props>`
  ${WrapperRight}
  position: relative;
  left: 0%;
  width: 100%;
  padding: 0;
  padding-left: 38px;
  ${desktop(css<Props>`
    ${props => (props.i % 2 === 0 ? WrapperRight : WrapperLeft)};
    margin-top: ${props => (props.i === 0 ? 0 : -60)}px;
    width: 50%;
  `)}
`;

export const arrow = css`
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  top: 22px;
  z-index: 2;
  border: medium solid white;
`;

export const rightArrow = css`
  &::before {
    ${arrow}
    left: 100%;
    margin-left: 0;
    border-width: 10px 0px 10px 10px;
    border-color: transparent transparent transparent white;
`;

export const leftArrow = css`
  &::before {
    ${arrow}
    left: 0%;
    margin-left: -10px;
    border-width: 10px 10px 10px 0px;
    border-color: transparent white transparent transparent;
`;

export const leftCard = css`
  ${leftArrow}
`;

const rightCard = css`
  ${rightArrow}
`;

export const ProjectCard = styled.div<Props>`
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.14));
  overflow: visible;
  position: relative;
  border-radius: ${radius(2)};
  width: 100%;
  padding: ${space(3)} ${space(4)};
  background: ${color("background.light")};
  ${phone(css<Props>`
    ${leftCard}
  `)}
  ${desktop(css<Props>`
    ${props => (props.i % 2 === 0 ? leftCard : rightCard)}
  `)}
`;
