import { assert } from "jsr:@std/assert";
import { isNullish } from "./isNullish.js";

Deno.test("isNullish", () => {
  assert(!isNullish(0));
  assert(!isNullish(""));
  assert(!isNullish(false));
  assert(!isNullish({}));
  assert(!isNullish([]));
  assert(!isNullish(Symbol()));
  assert(isNullish(null));
  assert(isNullish(undefined));
});
