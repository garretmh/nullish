/**
 * @module
 *
 * A module providing a function that TODO
 *
 * @example
 * ```ts
 * import { andThen } from "jsr:@garretmh/nullish/andThen.js";
 *
 * andThen('ab', (x) => x + 'yz') === 'abyz'
 * andThen(null, (x) => x + 'yz') === undefined
 * andThen('ab', (x) => x + 'yz', () => 'else') === 'abyz'
 * andThen(null, (x) => x + 'yz', () => 'else') === 'else'
 * ```
 */

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else undefined.
 */
export function andThen<T, U>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
): T extends null | undefined ? undefined : U;

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else the return value of onNullish.
 */
export function andThen<T, U, V>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
  onNullish: () => V,
): T extends null | undefined ? V : U;

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or the return value of onNullish if it is passed or else undefined.
 */
export function andThen<T, U, V = never>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): T extends null | undefined ? V | undefined : U;

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or the return value of onNullish if it is passed or else undefined.
 */
export function andThen<T, U, V = never>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): U | V | undefined {
  if (value != null) {
    return onSome(value);
  }
  if (onNullish) {
    return onNullish();
  }
  return undefined;
}
