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
 */
export function isNullish(a: unknown): a is null | undefined {
  return a == null;
}
