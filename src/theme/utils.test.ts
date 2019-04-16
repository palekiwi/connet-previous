import { mapToRem } from "./utils";

describe("mapToRem", () => {
  test("converts pixel numbers into rem units", () => {
    const vs = [4, 8, 16, 32];

    expect(mapToRem(vs)).toEqual(["0.25rem", "0.5rem", "1rem", "2rem"]);
  });
});
