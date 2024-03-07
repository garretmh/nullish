import { assertEquals } from "jsr:@std/assert";
import { orElse } from "./orElse.ts";

Deno.test("orElse", () => {
  assertEquals(orElse(() => "no")("aa"), "aa");
  assertEquals(orElse(() => "no")(undefined), "no");
});
