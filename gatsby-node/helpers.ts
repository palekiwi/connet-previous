import path from "path";
import {
  mergeWith,
  isNil,
  isEmpty,
  either,
  reduce,
  mapObjIndexed,
  defaultTo,
} from "ramda";

export const processStringProperties = (fns: any[], content: any): any => {
  if (isEmpty(fns)) return content;
  if (Array.isArray(content)) {
    return content.map(x => processStringProperties(fns, x));
  }
  if (typeof content === "string")
    return reduce((a, b) => b(a, null), content, fns);
  return mapObjIndexed((v, k) => {
    if (typeof v === "object") return processStringProperties(fns, v);
    if (typeof v === "string") {
      return reduce((a, b) => b(a, k), v, fns);
    } else return v;
  }, content);
};

export const replaceAssetPath = (parentPath: string) => (
  v: string,
  k?: string
) => {
  return /^\/assets/.test(v)
    ? path.relative(
        path.dirname(parentPath),
        path.join(path.resolve(__dirname, ".."), "/static/", v)
      )
    : v;
};

export const replaceAssetPaths = (node: any, parentPath: string) => {
  return processStringProperties([replaceAssetPath(parentPath)], node);
};

export const mergeTranslation = (a: any, b: any) =>
  mergeWith((a, b) => (either(isNil, isEmpty)(b) ? a : b))(a, defaultTo({}, b));
