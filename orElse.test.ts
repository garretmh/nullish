import { assertEquals } from "jsr:@std/assert";
import { orElse } from "./orElse.js";

Deno.test("orElse", () => {
  const no = () => "no";

  assertEquals(orElse("aa", no), "aa");
  assertEquals(orElse(undefined, no), "no");
});
