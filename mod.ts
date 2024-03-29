/**
 * @module nullish
 *
 * A module providing all of the nullable functions in this package.
 *
 * @example
 * ```ts
 * import * as nullish from "@garretmh/nullish";
 *
 * nullish.all([])
 * nullish.allValues({})
 * nullish.and('foo', 'bar')
 * nullish.andThen('foo', (x) => `${x} bar`)
 * nullish.attempt(() => 'foo')
 * nullish.chain('foo').andThen((x) => `${x} bar`).or('baz').value
 * nullish.filter('foo', (x) => x === 'bar')
 * nullish.isNullish('foo')
 * for (const x of nullish.iter('foo')) {}
 * nullish.notNullish('foo')
 * nullish.or('foo', 'bar')
 * nullish.orElse('foo', () => 'bar')
 * nullish.xor('foo', 'bar')
 * ```
 */

export * from "./all.ts";
export * from "./allValues.ts";
export * from "./and.ts";
export * from "./andThen.ts";
export * from "./attempt.ts";
export * from "./chain.ts";
export * from "./filter.ts";
export * from "./isNullish.ts";
export * from "./iter.ts";
export * from "./notNullish.ts";
export * from "./or.ts";
export * from "./orElse.ts";
export * from "./xor.ts";

export * as fp from "./fp/mod.ts";
