import { css } from "styled-components";
import { devices } from "./index";

const media = (idx: number) => (inner: any) => css`
  ${devices[idx]} {
    ${inner}
  }
`;

export const phone = media(0);
export const tablet = media(1);
export const desktop = media(2);
export const wide = media(3);
export const fullhd = media(4);
