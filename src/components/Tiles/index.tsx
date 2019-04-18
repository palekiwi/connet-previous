import styled, { css } from "styled-components";
import { tablet, desktop, wide, fullhd } from "src/theme/media";
import { space } from "src/theme";

export const Tile = styled.div<{ w: number[] }>`
  flex: 1 1 auto;
  width: ${props => props.w[0] * 100}%;
  ${props =>
    props.w[1] &&
    tablet(css`
      width: ${props => props.w[1] * 100}%;
    `)}
  ${props =>
    props.w[2] &&
    desktop(css`
      width: ${props => props.w[2] * 100}%;
    `)}
  ${props =>
    props.w[3] &&
    wide(css`
      width: ${props => props.w[3] * 100}%;
    `)}
  ${props =>
    props.w[4] &&
    fullhd(css`
      width: ${props => props.w[4] * 100}%;
    `)}
`;

export const Tiles = styled.div<{ gutter: number }>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: -${props => space(props.gutter)};
  margin-left: -${props => space(props.gutter)};
  & ${Tile} {
    padding-top: ${props => space(props.gutter)};
    padding-left: ${props => space(props.gutter)};
  }
`;
