/**
 * @module nullish
 *
 * A module providing functional versions of all of the nullable helpers.
 *
 * @example
 * ```ts
 * import * as nullish from "@garretmh/nullish/fp";
 *
 * nullish.all([])
 * nullish.allValues({})
 * nullish.and('foo', 'bar')
 * nullish.attempt(() => 'foo')
 * nullish.filter((x) => x === 'bar')('foo')
 * nullish.isNullish('foo')
 * for (const x of nullish.iter('foo')) {}
 * nullish.notNullish('foo')
 * nullish.or('foo', 'bar')
 * nullish.orElse(() => 'bar')('foo')
 * nullish.then((x) => `${x} bar`)('foo')
 * nullish.xor('foo', 'bar')
 * ```
 */

export * from "../all.ts";
export * from "../allValues.ts";
export * from "../and.ts";
export * from "../attempt.ts";
export * from "./filter.ts";
export * from "../isNullish.ts";
export * from "../iter.ts";
export * from "../notNullish.ts";
export * from "../or.ts";
export * from "./orElse.ts";
export * from "./then.ts";
export * from "../xor.ts";
