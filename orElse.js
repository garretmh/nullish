/**
 * @module
 *
 * A module providing a function that TODO
 *
 * @example
 * ```ts
 * import { orElse } from "jsr:@garretmh/nullish/orElse.js";
 *
 * orElse('ab', () => 'yz') === 'ab'
 * orElse(null, () => 'yz') === 'yz'
 * ```
 */

/**
 * Returns value if it isn't nullish or else the return value of onNullish
 *
 * @template T
 * @template U
 * @param {T} value
 * @param {() => U} onNullish
 * @returns {T | U}
 */
export function orElse(value, onNullish) {
  return value ?? onNullish();
}
