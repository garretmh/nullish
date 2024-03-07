import { assertEquals } from "jsr:@std/assert";
import { iter } from "./iter.ts";

Deno.test("iter", () => {
  assertEquals([...iter("aa")], ["aa"]);
  assertEquals([...iter(null)], []);
});
