import { assertEquals } from "jsr:@std/assert";
import { all } from "./all.js";

Deno.test("all with an array", () => {
  assertEquals(all([]), true, "empty array");
  assertEquals(all(["aa"]), true, "array containing a string");
  assertEquals(all([""]), true, "array containing an empty string");
  assertEquals(all([0]), true, "array containing zero");
  assertEquals(all([null]), false, "array containing null");
  assertEquals(all([undefined]), false, "array containing undefined");
  assertEquals(all(["aa", "bb"]), true, "array of strings");
  assertEquals(
    all([undefined, "bb"]),
    false,
    "array containing undefined and a string",
  );
  assertEquals(
    all(["aa", undefined]),
    false,
    "array containing a string and undefined",
  );
  assertEquals(all([undefined, undefined]), false, "array of undefined-s");
});

function* generator(...items: unknown[]) {
  yield* items;
}

Deno.test("all with an iterable", () => {
  assertEquals(all(generator()), true, "empty array");
  assertEquals(all(generator("aa")), true, "array containing a string");
  assertEquals(all(generator("")), true, "array containing an empty string");
  assertEquals(all(generator(0)), true, "array containing zero");
  assertEquals(all(generator(null)), false, "array containing null");
  assertEquals(all(generator(undefined)), false, "array containing undefined");
  assertEquals(all(generator("aa", "bb")), true, "array of strings");
  assertEquals(
    all(generator(undefined, "bb")),
    false,
    "array containing undefined and a string",
  );
  assertEquals(
    all(generator("aa", undefined)),
    false,
    "array containing a string and undefined",
  );
  assertEquals(
    all(generator(undefined, undefined)),
    false,
    "array of undefined-s",
  );
});
