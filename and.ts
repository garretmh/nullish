/**
 * @module
 *
 * A module providing a function that behaves like `&&` for nullishness rather
 * than truthiness.
 *
 * @example
 * ```ts
 * import { and } from "jsr:@garretmh/nullish/and.js";
 *
 * and('foo', 'bar') === 'bar'
 * and(false, 'bar') === 'bar'
 * and(null, 'bar') === null
 * and('foo', undefined) === undefined
 * ```
 */

/**
 * Returns the value of the first nullable parameter encountered when evaluating
 * from left to right, or the value of the last parameter if they are both
 * non-nullable.
 */
export function and<A, B>(a: A, b: B): A | B {
  return a == null ? a : b;
}
