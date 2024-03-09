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
 * Logical XOR for nullish rather than truthy values.
 *
 * @returns the right-hand side parameter when either the left-hand side
 * parameter is nullish or the right-hand side parameter is nullish but not
 * both.
 */
export function xor<A, B>(
  a: A,
  b: B,
): XOR<A, B>;

/**
 * Logical XOR for nullish rather than truthy values.
 *
 * @returns the right-hand side parameter when either the left-hand side
 * parameter is nullish or the right-hand side parameter is nullish but not
 * both.
 */
export function xor<A, B>(
  a: A,
  b: B,
): NonNullable<A> | NonNullable<B> | undefined {
  if (a != null) {
    return b != null ? undefined : a;
  } else {
    return b != null ? b : undefined;
  }
}

export type XOR<A, B> = A extends null | undefined
  ? (B extends null | undefined ? undefined : B)
  : (B extends null | undefined ? A : undefined);
