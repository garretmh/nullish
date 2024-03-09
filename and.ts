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
export function and<A, B>(a: A, b: B): A extends null | undefined ? B : A;

/**
 * Logical AND for nullish rather than truthy values.
 *
 * @returns the value of the first nullish parameter encountered when evaluating
 * from left to right, or the value of the last parameter if none are nullish.
 */
export function and<const T extends unknown[]>(...values: T): DeepAnd<T>;

/**
 * Logical AND for nullish rather than truthy values.
 *
 * @returns the value of the first nullish parameter encountered when evaluating
 * from left to right, or the value of the last parameter if none are nullish.
 */
export function and<const T extends unknown[]>(...values: T): T[number] {
  for (const value of values) {
    if (value == null) {
      return value;
    }
  }
  return values.at(-1);
}

/**
 * The first nullish type encountered when evaluating from left to right, or the
 * last type if none are nullish.
 */
export type DeepAnd<T extends unknown[]> = T extends [infer U, ...infer V]
  ? U extends null | undefined ? U : V[number] extends never ? U : DeepAnd<V>
  : T[number];
