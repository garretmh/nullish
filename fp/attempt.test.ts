import { assertEquals } from "jsr:@std/assert";
import { attempt } from "./attempt.ts";

Deno.test("attempt returns return value of callback", () => {
  const attemptFn = attempt((x) => x + "bar");
  assertEquals(attemptFn("foo"), "foobar");
});

Deno.test("attempt returns undefined if callback throws", () => {
  const attemptFn = attempt(() => {
    throw Symbol();
  });
  assertEquals(attemptFn(), undefined);
});

Deno.test("attempt returns catch return if callback throws", () => {
  const attemptFn = attempt(
    (x) => {
      throw x + "bar";
    },
    (x) => x + "baz",
  );
  assertEquals(attemptFn("foo"), "foobarbaz");
});
