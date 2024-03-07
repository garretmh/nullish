import { assertEquals } from "jsr:@std/assert";
import { then } from "./then.ts";

Deno.test("then", () => {
  const id = (x: unknown) => "+" + x;
  const no = () => "no";

  assertEquals(then(id)("aa"), "+aa");
  assertEquals(then(id, no)("aa"), "+aa");
  assertEquals(then(id)(undefined), undefined);
  assertEquals(then(id, no)(undefined), "no");
});
