import { assertEquals } from "jsr:@std/assert";
import { filter } from "./filter.ts";

Deno.test("filter", () => {
  assertEquals(filter("aa", () => true), "aa");
  assertEquals(filter("aa", () => false), undefined);
  assertEquals(filter(undefined, () => true), undefined);
  assertEquals(filter(undefined, () => false), undefined);
});
