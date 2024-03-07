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

export function filter<T, U extends NonNullable<T>>(
  value: T,
  predicate: (value: T) => value is U,
): U | undefined;

export function filter<T>(
  value: T,
  predicate: (value: T) => boolean,
): NonNullable<T> | undefined;

export function filter<T>(
  value: T,
  predicate: (value: T) => boolean,
): NonNullable<T> | undefined {
  if (value != null && predicate(value)) {
    return value;
  }
  return undefined;
}
