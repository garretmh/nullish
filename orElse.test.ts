import { assertEquals } from "jsr:@std/assert";
import { orElse } from "./orElse.ts";

Deno.test("orElse", () => {
  const no = () => "no";

  assertEquals(orElse("aa", no), "aa");
  assertEquals(orElse(undefined, no), "no");
});
