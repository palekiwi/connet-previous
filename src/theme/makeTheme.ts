import { mergeDeepRight } from "ramda";
import { defaultTheme } from "./defaultTheme";

export const makeTheme = (theme: any) => mergeDeepRight(defaultTheme, theme);
