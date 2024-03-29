/**
 * @module
 *
 * A module providing a function that behaves like `||` for nullishness rather
 * than truthiness.
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

/** Logical OR for nullish types */
export type Or<A, B> = A extends null | undefined ? B : A;

/** Logical OR for a series of nullish types */
export type OrMultiple<T extends unknown[]> = T extends [infer U, ...infer V]
  ? U extends null | undefined ? V[number] extends never ? U : OrMultiple<V> : U
  : T[number];

/**
 * Logical OR for nullish rather than truthy values.
 *
 * Equivalent to the nullish coalescing operator (`??`).
 *
 * @returns the right-hand side parameter when the left-hand side parameter is
 * null or undefined, and otherwise returns the left-hand side parameter.
 */
export function or<A, B>(a: A, b: B): Or<A, B>;

/**
 * Logical OR for nullish rather than truthy values.
 *
 * @returns the value of the first non-nullish parameter encountered when
 * evaluating from left to right, or the value of the last parameter if all are
 * nullish.
 */
export function or<const T extends unknown[]>(...values: T): OrMultiple<T>;

/**
 * Logical OR for nullish rather than truthy values.
 *
 * @returns the value of the first non-nullish parameter encountered when
 * evaluating from left to right, or the value of the last parameter if all are
 * nullish.
 */
export function or<const T extends unknown[]>(...values: T): T[number] {
  for (const value of values) {
    if (value != null) {
      return value;
    }
  }
  return values.at(-1);
}
