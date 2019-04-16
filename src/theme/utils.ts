import { map, compose } from "ramda";

export const byBase = (base: number) => (n: number) => n / base;
export const appendUnit = (u: string) => (x: number) => `${x}${u}`;

export const pxToRem = compose(
  appendUnit("rem"),
  byBase(16)
);

export const mapToRem = map(pxToRem);

export const unit = (u: string, xs: number[]) => xs.map(appendUnit("px"));
