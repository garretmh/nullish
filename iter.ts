/**
 * @module
 *
 * A module providing a function returns an iterable that yeilds the provided
 * value if it isn't nullable.
 *
 * @example
 * ```ts
 * import { iter } from "jsr:@garretmh/nullish/iter.js";
 *
 * for (const value of iter('foo')) {
 *   console.log(value) // logs 'foo'
 * }
 * for (const value of iter(false)) {
 *   console.log(value) // logs 'foo'
 * }
 * for (const value of iter(null)) {
 *   console.log(value) // is never called
 * }
 * for (const value of iter(undefined)) {
 *   console.log(value) // is never called
 * }
 * ```
 */

/**
 * Returns an iterable that yields the provided value if it isn't nullable.
 */
export function* iter<T>(value: T): Generator<NonNullable<T>, void> {
  if (value != null) yield value;
}
