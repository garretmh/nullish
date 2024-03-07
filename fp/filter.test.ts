import { assertEquals } from "jsr:@std/assert";
import { filter } from "./filter.ts";

Deno.test("fp/filter", () => {
  assertEquals(filter(() => true)("aa"), "aa");
  assertEquals(filter(() => false)("aa"), undefined);
  assertEquals(filter(() => true)(undefined), undefined);
  assertEquals(filter(() => false)(undefined), undefined);
});
