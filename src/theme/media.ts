import { css, FlattenSimpleInterpolation } from "styled-components";

export const devices = [
  `@media (min-width: 0px)`,
  `@media (min-width: 600px)`,
  `@media (min-width: 768px)`,
  `@media (min-width: 1024px)`,
  `@media (min-width: 1440px)`,
];

const media = (idx: number) => (inner: FlattenSimpleInterpolation) => css`
  ${devices[idx]} {
    ${inner}
  }
`;

export const tablet = media(1);
export const laptop = media(2);
export const desktop = media(3);
export const wide = media(4);
