/**
 * @module
 *
 * A module providing a function to check whether every item in an iterable is
 * not nullish.
 *
 * @example
 * ```ts
 * import { all } from "jsr:@garretmh/nullish/all.js";
 *
 * all([]) === true
 * all([true, 'f', 1]) === true
 * all([false, '', 0]) === true
 * all([null, undefined]) === false
 * ```
 */

/**
 * Whether every item in the array is not nullish.
 * @template {readonly unknown[]} Arr
 * @overload
 * @param {Arr} values
 * @returns {values is import('./types.ts').ArrayOfSome<Arr>}
 */
/**
 * Whether every item in the iterable is not nullish.
 * @template U
 * @overload
 * @param {Iterable<U>} values
 * @returns {values is Iterable<NonNullable<U>>}
 */
/**
 * @template T
 * @param {Iterable<T>} values
 * @returns {values is Iterable<NonNullable<T>>}
 */
export function all(values) {
  for (const value of values) {
    if (value == null) {
      return false;
    }
  }
  return true;
}
