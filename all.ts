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
 * Whether all array items are not nullish.
 */
export function all<T extends readonly unknown[]>(
  values: T,
): values is FilledArray<T>;

/**
 * Whether all iterable items are not nullish.
 */
export function all<T>(values: Iterable<T>): values is Iterable<NonNullable<T>>;

/**
 * Whether all iterable items are not nullish.
 */
export function all<T>(
  values: Iterable<T>,
): values is Iterable<NonNullable<T>> {
  for (const value of values) {
    if (value == null) {
      return false;
    }
  }
  return true;
}

/** An array with no nullable items */
type FilledArray<T extends readonly unknown[] | []> = T[number] extends
  NonNullable<T[number]> ? T : never;
