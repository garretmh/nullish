/**
 * @module
 *
 * A module providing all of the nullable functions in this package.
 *
 * @example
 * ```ts
 * import * as nullish from "jsr:@garretmh/nullish";
 *
 * nullish.all([])
 * nullish.allValues({})
 * nullish.and('foo', 'bar')
 * nullish.attempt(() => 'foo')
 * nullish.filter('foo', (x) => x === 'bar')
 * nullish.isNullish('foo')
 * for (const x of nullish.iter('foo')) {}
 * nullish.notNullish('foo')
 * nullish.or('foo', 'bar')
 * nullish.orElse('foo', () => 'bar')
 * nullish.then('foo', (x) => `${x} bar`)
 * nullish.xor('foo', 'bar')
 * ```
 */

export * from "./all.js";
export * from "./allValues.js";
export * from "./and.js";
export * from "./attempt.js";
export * from "./filter.js";
export * from "./isNullish.js";
export * from "./iter.js";
export * from "./notNullish.js";
export * from "./or.js";
export * from "./orElse.js";
export * from "./then.js";
export * from "./xor.js";
