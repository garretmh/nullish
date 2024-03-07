import { assertEquals } from "jsr:@std/assert";
import { xor } from "./xor.js";

Deno.test("xor", () => {
  assertEquals(xor("aa", "bb"), undefined);
  assertEquals(xor(null, "bb"), "bb");
  assertEquals(xor("aa", null), "aa");
  assertEquals(xor(null, undefined), undefined);
  assertEquals(xor(undefined, null), undefined);
  assertEquals(xor(null, null), undefined);
  assertEquals(xor(undefined, undefined), undefined);
});
