import { lighten, darken } from "../utils/helpers";

const primary = "rgb(36,140,204)";
const secondary = "rgb(203,160,83)";

export const colors = {
  primary: {
    dark: darken(primary)(1 / 4),
    main: primary,
    light: lighten(primary)(1 / 4),
    contrast: "rgba(255,255,255,0.85)",
  },
  secondary: {
    dark: darken(secondary)(1 / 4),
    main: secondary,
    light: lighten(secondary)(1 / 4),
    contrast: "rgba(255,255,255,0.85)",
  },
  error: {
    light: "hsl(5, 76%, 30%)",
    main: "hsl(5, 76%, 50%)",
    dark: "hsl(5, 76%, 70%)",
    contrast: "rgba(255,255,255,0.9)",
  },
  divider: {
    light: "rgba(0, 0, 0, 0.06)",
    main: "rgba(0, 0, 0, 0.12)",
    dark: "rgba(0, 0, 0, 0.18)",
  },
  white: {
    dark: "rgba(255,255,255,0.8)",
    main: "rgba(255,255,255,0.9)",
    light: "rgba(255,255,255,1)",
    contrast: "rgba(0, 0, 0, 0.9)",
  },
  black: {
    dark: "rgba(0,0,0,1)",
    main: "rgba(0,0,0,0.9)",
    light: "rgba(0,0,0,8)",
    contrast: "rgba(255, 255, 255, 0.95)",
  },
  text: {
    dark: "rgba(0, 0, 0, 0.87)",
    main: "rgba(0, 0, 0, 0.54)",
    light: "rgba(0, 0, 0, 0.38)",
    contrast: "rgba(255, 255, 255, 0.9)",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  background: {
    light: "#fff",
    main: "#fafafa",
    dark: "#fcfcfc",
  },
};
