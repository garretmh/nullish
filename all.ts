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

export function all<T extends readonly unknown[]>(
  values: T,
): values is FilledArray<T>;

export function all<T>(values: Iterable<T>): values is Iterable<NonNullable<T>>;

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

type FilledArray<T extends readonly unknown[] | []> = T[number] extends
  NonNullable<T[number]> ? T : never;
