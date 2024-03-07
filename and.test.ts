import { assertEquals } from "jsr:@std/assert";
import { and } from "./and.ts";

Deno.test("and", () => {
  assertEquals(and("aa", "bb"), "bb");
  assertEquals(and(undefined, "bb"), undefined);
  assertEquals(and(null, "bb"), null);
  assertEquals(and("aa", undefined), undefined);
  assertEquals(and("aa", null), null);
  assertEquals(and(undefined, undefined), undefined);
  assertEquals(and(undefined, null), undefined);
  assertEquals(and(null, undefined), null);
  assertEquals(and(null, null), null);
});
