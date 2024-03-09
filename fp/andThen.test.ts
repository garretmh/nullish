import { assertEquals } from "jsr:@std/assert";
import { andThen } from "./andThen.ts";

Deno.test("andThen", () => {
  const id = (x: unknown) => "+" + x;
  const no = () => "no";

  assertEquals(andThen(id)("aa"), "+aa");
  assertEquals(andThen(id, no)("aa"), "+aa");
  assertEquals(andThen(id)(undefined), undefined);
  assertEquals(andThen(id, no)(undefined), "no");
});
