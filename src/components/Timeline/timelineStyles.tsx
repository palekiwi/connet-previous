import { styled, css, Box, Flex, Card } from "primithemes";

export const Line = styled(Flex)`
  position: relative;
  &::before {
    content: "";
    background: ${props => props.theme.colors.grey[500]};
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0%;
    margin-left: 16px;
    transform: translateX(-50%);
    ${props => props.theme.devices[2]} {
      left: 50%;
      margin-left: 0;
    }
  }
`;

export const Marker = styled(Card)`
  position: absolute;
  transform: translateX(-50%);
  top: 14px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
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

export const Wrapper = styled(Box)<{ i: number }>`
  ${WrapperRight}
  position: relative;
  left: 0%;
  width: 100%;
  padding: 0;
  padding-left: 38px;
  ${props => props.theme.devices[2]} {
    ${props => (props.i % 2 === 0 ? WrapperRight : WrapperLeft)};
    margin-top: ${props => (props.i === 0 ? 0 : -60)}px;
    width: 50%;
  }
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

export const ProjectCard = styled(Card)<{ i: number }>`
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.14));
  overflow: visible;
  position: relative;
  ${props => props.theme.devices[0]} {
    ${leftCard}
  }
  ${props => props.theme.devices[2]} {
    ${props => (props.i % 2 === 0 ? leftCard : rightCard)}
  }
`;
