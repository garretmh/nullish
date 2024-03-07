/**
 * @module
 *
 * A module providing a function that behaves like a logical XOR for nullishness
 * rather than truthiness.
 *
 * @example
 * ```ts
 * import { xor } from "jsr:@garretmh/nullish/xor.js";
 *
 * xor('az', 'az') === false
 * xor(null, null) === false
 * xor(null, 'az') === true
 * xor('az', null) === true
 * ```
 */

/**
 * Returns its right-hand side parameter when either its left-hand side
 * parameter is nullish or it's right-hand side parameter is nullish but not
 * both.
 *
 * @template A
 * @template B
 * @param {A} a
 * @param {B} b
 * @returns {NonNullable<A> | NonNullable<B> | undefined}
 */
export function xor(a, b) {
  if (a != null) {
    return b != null ? undefined : a;
  } else {
    return b != null ? b : undefined;
  }
}
