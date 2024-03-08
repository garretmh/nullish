import { filter as _filter } from "../filter.ts";

/**
 * Perform a test on a value if it isn't nullish. Returns the value if it isn't
 * nullish and it passes the test, or else undefined.
 */
export function filter<T, U extends T>(
  predicate: (value: T) => value is U,
): (value: T) => U | undefined;

/**
 * Perform a test on a value if it isn't nullish. Returns the value if it isn't
 * nullish and it passes the test, or else undefined.
 */
export function filter<T>(
  predicate: (value: T) => boolean,
): (value: T) => NonNullable<T> | undefined;

/**
 * Perform a test on a value if it isn't nullish. Returns the value if it isn't
 * nullish and it passes the test, or else undefined.
 */
export function filter<T>(
  predicate: (value: T) => boolean,
): (value: T) => NonNullable<T> | undefined {
  return (value) => _filter(value, predicate);
}
