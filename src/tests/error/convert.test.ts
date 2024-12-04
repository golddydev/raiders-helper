import { convertError as convert } from "index.js";
import { expect, test } from "vitest";

test("can convert string", () => {
  expect(convert("this is a string")).toBe("this is a string");
});

test("can convert Error", () => {
  expect(convert(new Error("An Error was thrown"))).toBe("An Error was thrown");
});

test("can convert bigint", () => {
  expect(convert(10n)).toBe("10");
});

test("can convert object", () => {
  expect(convert({ msg: "This is an object" })).toBe(
    '{"msg":"1"},"This is an object"'
  );
});

test("can convert class", () => {
  class MyObject {
    constructor(public a: string, public b: number) {}
  }

  expect(convert(new MyObject("a", 3))).toBe('{"a":"1","b":3},"a"');
});
