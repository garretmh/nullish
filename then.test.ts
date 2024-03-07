import { assertEquals } from "jsr:@std/assert";
import { then } from "./then.js";

Deno.test("then", () => {
  const id = (x: unknown) => "+" + x;
  const no = () => "no";

  assertEquals(then("aa", id), "+aa");
  assertEquals(then("aa", id, no), "+aa");
  assertEquals(then(undefined, id), undefined);
  assertEquals(then(undefined, id, no), "no");
});
