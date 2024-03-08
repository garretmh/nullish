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
 * Logical AND for nullish rather than truthy values.
 *
 * @returns the value of the first nullish parameter encountered when evaluating
 * from left to right, or the value of the last parameter if neither is nullish.
 */
export function and<A, B>(a: A, b: B): A | B;

/**
 * Logical AND for nullish rather than truthy values.
 *
 * @returns the value of the first nullish parameter encountered when evaluating
 * from left to right, or the value of the last parameter if neither is nullish.
 */
export function and<const T extends unknown[]>(...values: T): T[number];

export function and<const T extends unknown[]>(...values: T): T[number] {
  for (const value of values) {
    if (value == null) {
      return value;
    }
  }
  return values.at(-1);
}
