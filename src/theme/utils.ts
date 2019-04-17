import { map, compose } from "ramda";

export const byBase = (base: number) => (n: number) => n / base;
export const appendUnit = (u: string) => (x: number) => `${x}${u}`;

export const rem = compose(
  appendUnit("rem"),
  byBase(16)
);

export const mapToRem = map(rem);

export const unit = (u: string, xs: number[]) => xs.map(appendUnit("px"));
