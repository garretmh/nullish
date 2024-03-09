import { andThen as _andThen } from "../andThen.ts";

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or else undefined.
 */
export function andThen<T, U>(
  onSome: (value: NonNullable<T>) => U,
): (value: T) => T extends null | undefined ? undefined : U;

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or else the return value of onNullish.
 */
export function andThen<T, U, V>(
  onSome: (value: NonNullable<T>) => U,
  onNullish: () => V,
): (value: T) => T extends null | undefined ? V : U;

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or the return value of onNullish if it is passed or
 * else undefined.
 */
export function andThen<T, U, V = never>(
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): T extends null | undefined ? V | undefined : U;

/**
 * Returns a function that returns the return value of onSome when the passed
 * value is not nullable, or the return value of onNullish if it is passed or
 * else undefined.
 */
export function andThen<T, U, V = never>(
  onSome: (value: NonNullable<T>) => U,
  onNullish?: () => V,
): (value: T) => U | V | undefined {
  return (value) => _andThen(value, onSome, onNullish);
}
