/**
 * @module
 *
 * A module providing a function checks whether a value isn't nullish.
 *
 * @example
 * ```ts
 * import { notNullish } from "jsr:@garretmh/nullish/notNullish.js";
 *
 * notNullish('foo') === true
 * notNullish(false) === true
 * notNullish(null) === false
 * notNullish(undefined) === false
 * ```
 */

/**
 * Whether the value isn't nullish.
 *
 * @template T
 * @param {T} a
 * @returns {a is NonNullable<T>}
 */
export function notNullish(a) {
  return a != null;
}
