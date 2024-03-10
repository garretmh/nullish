/**
 * @module
 *
 * A module providing a function wraps JavaScript's try..catch.
 *
 * @example
 * ```ts
 * import { attempt } from "jsr:@garretmh/nullish/attempt.js";
 *
 * attempt(() => { throw new Error('foo') }, (error) => error.message) === 'foo'
 * attempt(() => { return 'bar' }, (error) => error.message) === 'bar'
 * attempt(() => { throw new Error('foo') }) === undefined
 * attempt(() => { return 'bar' }) === 'bar'
 * ```
 */

/**
 * Call the provided function and return the result, or undefined if it throws.
 */
export function attempt<T>(fn: () => T): T | undefined;

/**
 * Call the provided function and return the result. If it throws, call the
 * provided catch function with the thrown value and return its result
 */
export function attempt<T, U>(
  fn: () => T,
  onCatch: (error: unknown) => U,
): T | U;

/**
 * Call the provided function and return the result. If it throws and a catch
 * function was provided, call the catch function with the thrown value and
 * return the result, otherwise return undefined.
 */
export function attempt<T, U, Args extends unknown[] = []>(
  fn: (...args: Args) => T,
  onCatch?: (error: unknown) => U,
): (...args: Args) => T | U | unknown;

/**
 * Call the provided function and return the result. If it throws and a catch
 * function was provided, call the catch function with the thrown value and
 * return the result, otherwise return undefined.
 */
export function attempt<T, U = undefined>(
  fn: () => T,
  onCatch?: (error: unknown) => U,
): T | U | undefined {
  if (typeof fn !== "function") throw new TypeError();
  try {
    return fn();
  } catch (err) {
    return onCatch?.(err);
  }
}
