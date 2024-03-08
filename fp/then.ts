import { then as _then } from "../then.ts";

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or else undefined.
 */
export function then<T, U>(
  onSome: (value: NonNullable<T>) => U,
): (value: T) => U | undefined;

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or else the return value of onNullish.
 */
export function then<T, U, V>(
  onSome: (value: NonNullable<T>) => U,
  onNullish: () => V,
): (value: T) => U | V;

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or the return value of onNullish if it is passed or
 * else undefined.
 */
export function then<T, U, V = never>(
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): (value: T) => U | V | undefined;

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or the return value of onNullish if it is passed or
 * else undefined.
 */
export function then<T, U, V = never>(
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): (value: T) => U | V | undefined {
  return (value) => _then(value, onSome, onNullish);
}
