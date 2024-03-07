/**
 * @module
 *
 * A module providing a function to check whether a value is nullish.
 *
 * @example
 * ```ts
 * import { isNullish } from "jsr:@garretmh/nullish/isNullish.js";
 *
 * isNullish('foo') === false
 * isNullish(false) === false
 * isNullish(null) === true
 * isNullish(undefined) === true
 * ```
 */

/**
 * Whether the provided value is nullish.
 *
 * @param {unknown} a
 * @returns {a is null | undefined}
 */
export function isNullish(a) {
  return a == null;
}
