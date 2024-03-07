import { assertEquals } from "jsr:@std/assert";
import { or } from "./or.js";

Deno.test("or", () => {
  assertEquals(or("aa", "bb"), "aa");
  assertEquals(or(undefined, "bb"), "bb");
  assertEquals(or("aa", undefined), "aa");
  assertEquals(or(undefined, undefined), undefined);
  assertEquals(or(undefined, null), null);
  assertEquals(or(null, undefined), undefined);
  assertEquals(or(null, null), null);
});
