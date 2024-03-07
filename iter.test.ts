import { assertEquals } from "jsr:@std/assert";
import { iter } from "./iter.js";

Deno.test("iter", () => {
  assertEquals([...iter("aa")], ["aa"]);
  assertEquals([...iter(null)], []);
});
