import { assertEquals } from "jsr:@std/assert";
import { andThen } from "./andThen.ts";

Deno.test("andThen", () => {
  const id = (x: unknown) => "+" + x;
  const no = () => "no";

  assertEquals(andThen("aa", id), "+aa");
  assertEquals(andThen("aa", id, no), "+aa");
  assertEquals(andThen(undefined, id), undefined);
  assertEquals(andThen(undefined, id, no), "no");
});
