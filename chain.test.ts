import { assertEquals } from "jsr:@std/assert";
import { chain } from "./chain.ts";

Deno.test("chain().value", () => {
  const uniqueValue = Symbol();
  assertEquals(chain(uniqueValue).value, uniqueValue);
});
Deno.test("chain().isNullish", () => {
  assertEquals(chain(undefined).isNullish, true);
  assertEquals(chain(null).isNullish, true);
  assertEquals(chain("").isNullish, false);
  assertEquals(chain(0).isNullish, false);
  assertEquals(chain(false).isNullish, false);
  assertEquals(chain([]).isNullish, false);
  assertEquals(chain({}).isNullish, false);
});
Deno.test("chain().notNullish", () => {
  assertEquals(chain(undefined).notNullish, false, "undefined means false");
  assertEquals(chain(null).notNullish, false, "null means false");
  assertEquals(chain("").notNullish, true, "string means true");
  assertEquals(chain(0).notNullish, true, "number means true");
  assertEquals(chain(false).notNullish, true, "boolean means true");
  assertEquals(chain([]).notNullish, true, "array means true");
  assertEquals(chain({}).notNullish, true, "object means true");
});
Deno.test("chain().and", () => {
  assertEquals(chain(1000).and(2000, 3000).value, 3000);
  assertEquals(chain(1000).and(2000, null).value, null);
  assertEquals(chain(1000).and(null, 3000).value, null);
  assertEquals(chain(1000).and(null, null).value, null);
  assertEquals(chain(null).and(2000, 3000).value, null);
  assertEquals(chain(null).and(2000, null).value, null);
  assertEquals(chain(null).and(null, 3000).value, null);
  assertEquals(chain(null).and(null, null).value, null);
  //
  assertEquals(chain(null).and(null).value, null);
  assertEquals(chain(null).and(undefined).value, null);
  assertEquals(chain(undefined).and(null).value, undefined);
  assertEquals(chain(undefined).and(undefined).value, undefined);
});
Deno.test("chain().andThen", () => {
  assertEquals(chain(1000).andThen((x) => x * 2).value, 2000);
  assertEquals(chain(null).andThen((x) => x * 2).value, undefined);
  assertEquals(chain(1000).andThen((x) => x * 2, () => 3000).value, 2000);
  assertEquals(chain(null).andThen((x) => x * 2, () => 3000).value, 3000);
});
Deno.test("chain().filter", () => {
  assertEquals(chain(1000).filter((x) => x === 1000).value, 1000);
  assertEquals(chain(2000).filter((x) => x === 1000).value, undefined);
  assertEquals(chain(null).filter((x) => x === 1000).value, undefined);
});
Deno.test("chain().or", () => {
  assertEquals(chain(1000).or(2000, 3000).value, 1000);
  assertEquals(chain(1000).or(2000, null).value, 1000);
  assertEquals(chain(1000).or(null, 3000).value, 1000);
  assertEquals(chain(1000).or(null, null).value, 1000);
  assertEquals(chain(null).or(2000, 3000).value, 2000);
  assertEquals(chain(null).or(2000, null).value, 2000);
  assertEquals(chain(null).or(null, 3000).value, 3000);
  assertEquals(chain(null).or(null, null).value, null);
  //
  assertEquals(chain(null).or(null).value, null);
  assertEquals(chain(null).or(undefined).value, undefined);
  assertEquals(chain(undefined).or(null).value, null);
  assertEquals(chain(undefined).or(undefined).value, undefined);
});
Deno.test("chain().orElse", () => {
  assertEquals(chain(1000).orElse(() => 2000).value, 1000);
  assertEquals(chain(null).orElse(() => 2000).value, 2000);
});
Deno.test("chain().xor", () => {
  assertEquals(chain(1000).xor(1000).value, undefined);
  assertEquals(chain(1000).xor(null).value, 1000);
  assertEquals(chain(null).xor(1000).value, 1000);
  assertEquals(chain(null).xor(null).value, undefined);
});
