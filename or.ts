/**
 * @module
 *
 * A module providing a function that behaves like `||` for nullishness rather
 * than truthiness.
 *
 * Note: Equivalent to the nullish coalescing operator (`??`).
 *
 * @example
 * ```ts
 * import { or } from "jsr:@garretmh/nullish/or.js";
 *
 * or('foo', 'bar') === 'foo'
 * or(false, 'bar') === 'bar'
 * or(null, 'bar') === 'bar'
 * or('foo', undefined) === 'foo'
 * ```
 */

/**
 * Returns its right-hand side parameter when its left-hand side parameter is
 * null or undefined, and otherwise returns its left-hand side parameter.
 *
 * Note: Equivalent to the nullish coalescing operator (`??`).
 */
export function or<A, B>(a: A, b: B): NonNullable<A> | B {
  return a ?? b;
}
