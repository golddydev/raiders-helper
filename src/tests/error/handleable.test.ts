import { invariant, mayFail } from "index.js";
import { expect, test } from "vitest";

test("can fail", () => {
  const result = mayFail(() => {
    throw new Error("Error");
  });

  invariant(!result.ok);
  expect(result.error).toBe("Error");
});

test("can succeed", () => {
  const result = mayFail(() => "success");

  invariant(result.ok);
  expect(result.data).toBe("success");
});

test("can handle", () => {
  let handled = false;

  const result = mayFail(() => {
    throw new Error("this is an error");
  }).handle((message) => {
    expect(message, "this is an error");
    handled = true;
  });

  invariant(!result.ok);
  expect(result.error).toBe("this is an error");
  expect(handled).toBe(true);
});
