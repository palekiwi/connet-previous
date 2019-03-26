import { darken as d, lighten as l } from "polished";
import { isNil, always, ifElse, contains } from "ramda";

export const darken = (color: string) => (v: number) => d(v, color);
export const lighten = (color: string) => (v: number) => l(v, color);

export const safeIncludes = (x: any, y: any[] | undefined) =>
  ifElse(isNil, always(false), contains(x))(y);

export const isSameDay = (d1: string, d2: string): boolean => {
  return d1.slice(0, 10) === d2.slice(0, 10);
};

export const compareDates = (d1: string | null, d2: string): number => {
  const [a, b] = [d1 ? new Date(d1) : new Date(), new Date(d2)].map(x =>
    x.valueOf()
  );
  if (a > b) return -1;
  if (a === b) return 0;
  return 1;
};

export const isFutureDate = (d: string) => compareDates(null, d) > 0;
export const isPastDate = (d: string) => compareDates(null, d) < 0;

export const isOngoing = (d1: string, d2: string) =>
  compareDates(null, d1) <= 0 && compareDates(null, d2) >= 0;
