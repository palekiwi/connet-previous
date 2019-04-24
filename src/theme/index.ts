import { shadows } from "./shadows";
import { colors } from "./colors";
import { unit, rem, mapToRem } from "./utils";

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

const g = 16;
export const widths = mapToRem([
  0,
  769,
  960 + 2 * g,
  1152 + 2 * g,
  1344 + 2 * g,
]);

export const gap = rem(16);

export const devices = widths.map(x => `@media (min-width: ${x})`);

export const fonts = {
  sans: "Muli, sans",
  serif: "serif",
};

export const color = (s: string) => {
  const [a, b] = s.split(".");
  return colors[a][b];
};

export const space = (n: number) => spaces[n];
export const shadow = (n: number) => shadows[n];
export const lineHeight = (n: number) => lineHeights[n];
export const size = (n: number) => fontSizes[n];
export const radius = (n: number) => radii[n];
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
  shadows,
  zIndexes,
  f,
};

export type Theme = typeof defaultTheme;

export { defaultTheme };
