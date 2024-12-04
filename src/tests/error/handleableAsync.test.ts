import { invariant, mayFailAsync } from "index.js";
import { expect, test } from "vitest";

import { sleep } from "./index.js";

test("can fail", async () => {
  const result = await mayFailAsync(async () => {
    await sleep();
    throw new Error("Error");
  }).complete();

  invariant(!result.ok);
  expect(result.error).toBe("Error");
});

test("can succeed", async () => {
  const result = await mayFailAsync(async () => {
    await sleep();
    return "success";
  }).complete();

  invariant(result.ok);
  expect(result.data).toBe("success");
});

test("can handle", async () => {
  let handled = false;

  const result = await mayFailAsync(async () => {
    throw new Error("this is an error");
  })
    .handle((message) => {
      expect(message, "this is an error");
      handled = true;
    })
    .complete();

  invariant(!result.ok);
  expect(result.error).toBe("this is an error");
  expect(handled).toBe(true);
});
