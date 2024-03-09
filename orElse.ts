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
 */
export function orElse<T, U>(
  value: T,
  onNullish: () => U,
): T extends null | undefined ? U : T;

/**
 * Returns value if it isn't nullish or else the return value of onNullish
 */
export function orElse<T, U>(value: T, onNullish: () => U): NonNullable<T> | U {
  return value ?? onNullish();
}
