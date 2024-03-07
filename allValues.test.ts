import { assertEquals } from "jsr:@std/assert";
import { allValues } from "./allValues.js";

Deno.test("allValues", () => {
  assertEquals(allValues({}), true);
  assertEquals(allValues({ a: "aa" }), true);
  assertEquals(allValues({ a: "" }), true);
  assertEquals(allValues({ a: 0 }), true);
  assertEquals(allValues({ a: null }), false);
  assertEquals(allValues({ a: undefined }), false);
  assertEquals(allValues({ a: "aa", b: "bb" }), true);
  assertEquals(allValues({ a: null, b: "bb" }), false);
  assertEquals(allValues({ a: "aa", b: null }), false);
  assertEquals(allValues({ a: null, b: null }), false);
});
