import { assertEquals } from "jsr:@std/assert";
import { attempt } from "./attempt.js";

Deno.test("attempt returns return value of callback", () => {
  const expected = Symbol();
  const actual = attempt(() => expected);
  assertEquals(actual, expected);
});

Deno.test("attempt returns undefined if callback throws", () => {
  const actual = attempt(() => {
    throw Symbol();
  });
  assertEquals(actual, undefined);
});

Deno.test("attempt returns catch return if callback throws", () => {
  const expected = Symbol();
  const actual = attempt(
    () => {
      throw Symbol();
    },
    () => expected,
  );
  assertEquals(actual, expected);
});

Deno.test("attempt callback thrown value passed to catch function", () => {
  const expected = Symbol();
  const actual = attempt(
    () => {
      throw expected;
    },
    (e) => e,
  );
  assertEquals(actual, expected);
});
