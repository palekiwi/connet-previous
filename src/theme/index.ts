import { shadows } from "./shadows";
import { colors } from "./colors";
import { unit, mapToRem } from "./utils";
import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
  FlattenSimpleInterpolation,
} from "styled-components";

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const sizes = mapToRem([0, 4, 8, 16, 32, 64, 128, 256, 512]);
const spaces = mapToRem([0, 4, 8, 16, 32, 64, 128, 256, 512]);
const fontSizes = mapToRem([12, 14, 15, 16, 18, 20, 24, 26, 28, 32, 36, 44]);
const fontWeights = { thin: 300, normal: 400, bold: 600 };
const dimensions = mapToRem([16, 32, 64, 128, 256, 512, 768, 1024, 1536]);
const zIndexes = [0, 100, 200, 300, 400, 500, 600, 700, 800];
const borders = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => `${n}px solid`);
const radii = unit("px", [0, 2, 4, 8, 16, 32, 64, 128]);
const lineHeights = [1.15, 1.25, 1.4, 1.5];
const letterSpacings = ["normal", "-0.05", "0.1em", "0.25"];

export const devices = [
  `@media (min-width: 0px)`,
  `@media (min-width: 600px)`,
  `@media (min-width: 768px)`,
  `@media (min-width: 1024px)`,
  `@media (min-width: 1440px)`,
];

export const fonts = {
  sans: "Muli, sans",
  serif: "serif",
};

const maxWidth = "1440px";

export const color = (s: string) => {
  const [a, b] = s.split(".");
  return colors[a][b];
};

export const tablet = (inner: FlattenSimpleInterpolation) => css`
  ${devices[1]} {
    ${inner}
  }
`;
export const space = (n: number) => spaces[n];
export const shadow = (n: number) => shadows[n];
export const lineHeight = (n: number) => lineHeights[n];
export const size = (n: number) => fontSizes[n];
export const weight = (s: "thin" | "normal" | "bold") => fontWeights[s];

const f = {
  color,
};

const defaultTheme = {
  sizes,
  colors,
  borders,
  radii,
  devices,
  dimensions,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  maxWidth,
  shadows,
  zIndexes,
  f,
};

type Theme = typeof defaultTheme;

const css = baseCss as ThemedCssFunction<Theme>;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export { defaultTheme, css, styled, Scale, Theme };
