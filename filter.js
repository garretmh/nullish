/**
 * @module
 *
 * A module providing a function that... TODO
 *
 * @example
 * ```ts
 * import { filter } from "jsr:@garretmh/nullish/filter.js";
 *
 * filter('ab', (x) => x == 'ab') === 'ab'
 * filter('yz', (x) => x == 'ab') === undefined
 * filter(null, (x) => x == 'ab') === undefined
 * ```
 */

/**
 * @template T
 * @overload
 * @param {T} value
 * @param {(value: T) => boolean} predicate
 * @returns {NonNullable<T> | undefined}
 */
/**
 * @template T
 * @template {NonNullable<T>} U
 * @overload
 * @param {T} value
 * @param {(value: T) => value is U} predicate
 * @returns {U | undefined}
 */
/**
 * @template T
 * @param {T} value
 * @param {(value: T) => boolean} predicate
 * @returns {NonNullable<T> | undefined}
 */
export function filter(value, predicate) {
  if (value != null && predicate(value)) {
    return value;
  }
  return undefined;
}
