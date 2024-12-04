import { getCardanoNetwork, getLucidNetwork, getNetwork } from "index.js";
import { expect, test } from "vitest";

test("getLucidNetwork returns Mainnet", () => {
  expect(getLucidNetwork("mainnet29d9c374b446614df22395fa435cca20")).toBe(
    "Mainnet"
  );
});

test("getLucidNetwork returns Preview", () => {
  expect(getLucidNetwork("previewfa4b94fc7158b77e67b7bcc0b7428597")).toBe(
    "Preview"
  );
});

test("getLucidNetwork returns Preprod", () => {
  expect(getLucidNetwork("preprodfc361d8107bfdfe54065a18ddf1944a3")).toBe(
    "Preprod"
  );
});

test("getLucidNetwork throws error when key invalid", () => {
  expect(() =>
    getLucidNetwork("customy778357aac92fe1eea0909729931c78ed")
  ).toThrowError();
});

test("getNetwork returns mainnet", () => {
  expect(getNetwork("mainnet54c26d9790998e7983a06c8ff1e51a96")).toBe("mainnet");
});

test("getNetwork returns preview", () => {
  expect(getNetwork("preview8c33ef8e36439d60236b4fdf6d558c60")).toBe("preview");
});

test("getNetwork returns preprod", () => {
  expect(getNetwork("preprodfcd5e51b6b846e772a45520ef7168ab862")).toBe(
    "preprod"
  );
});

test("getNetwork throws error when key invalid", () => {
  expect(() => getNetwork("this is not a key")).toThrowError();
});

test("getCardanoNetwork returns mainnet", () => {
  expect(getCardanoNetwork("mainnet29d9c374b446614df22395fa435cca20")).toBe(
    "mainnet"
  );
});

test("getCardanoNetwork returns preview", () => {
  expect(getCardanoNetwork("previewfa4b94fc7158b77e67b7bcc0b7428597")).toBe(
    "preview"
  );
});

test("getCardanoNetwork returns testnet", () => {
  expect(getCardanoNetwork("preprodfc361d8107bfdfe54065a18ddf1944a3")).toBe(
    "testnet"
  );
});

test("getCardanoNetwork throws error when key invalid", () => {
  expect(() =>
    getCardanoNetwork("customy778357aac92fe1eea0909729931c78ed")
  ).toThrowError();
});
