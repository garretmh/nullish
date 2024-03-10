import { attempt as _attempt } from "../attempt.ts";

/**
 * Wrap the provided function. If it throws when called, return undefined.
 */
export function attempt<T, Args extends unknown[] = []>(
  fn: (...args: Args) => T,
): (...args: Args) => T | undefined;

/**
 * Wrap the provided function. If it throws when called, call the catch function
 * with the thrown value and return the result.
 */
export function attempt<T, U, Args extends unknown[] = []>(
  fn: (...args: Args) => T,
  onCatch: (error: unknown) => U,
): (...args: Args) => T | U;

/**
 * Wrap the provided function. If it throws when called and a catch function was
 * provided, call the catch function with the thrown value and return the
 * result, otherwise return undefined.
 */
export function attempt<T, U, Args extends unknown[] = []>(
  fn: (...args: Args) => T,
  onCatch?: (error: unknown) => U,
): (...args: Args) => T | U | unknown;

/**
 * Wrap the provided function. If it throws when called and a catch function was
 * provided, call the catch function with the thrown value and return the
 * result, otherwise return undefined.
 */
export function attempt<T, U = never, Args extends unknown[] = []>(
  fn: (...args: Args) => T,
  onCatch?: (error: unknown) => U,
): (...args: Args) => T | U | undefined {
  return (...args) => {
    try {
      return fn(...args);
    } catch (error) {
      return onCatch?.(error);
    }
  };
}
