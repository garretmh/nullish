/**
 * @module
 *
 * A module providing a function that TODO
 *
 * @example
 * ```ts
 * import { then } from "jsr:@garretmh/nullish/then.js";
 *
 * then('ab', (x) => x + 'yz') === 'abyz'
 * then(null, (x) => x + 'yz') === undefined
 * then('ab', (x) => x + 'yz', () => 'else') === 'abyz'
 * then(null, (x) => x + 'yz', () => 'else') === 'else'
 * ```
 */

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else undefined.
 */
export function then<T, U>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
): U | undefined;

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else the return value of onNullish.
 */
export function then<T, U, V>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
  onNullish: () => V,
): U | V;

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or the return value of onNullish if it is passed or else undefined.
 */
export function then<T, U, V = never>(
  value: T,
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): U | V | undefined;

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or the return value of onNullish if it is passed or else undefined.
 */
export function then<T, U, V = never>(
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
