import { assert } from "jsr:@std/assert";
import { notNullish } from "./notNullish.js";

Deno.test("notNullish", () => {
  assert(notNullish(0));
  assert(notNullish(""));
  assert(notNullish(false));
  assert(notNullish({}));
  assert(notNullish([]));
  assert(notNullish(Symbol()));
  assert(!notNullish(undefined));
  assert(!notNullish(null));
  assert(!notNullish(undefined));
});
