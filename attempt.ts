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
 * Returns the value returned by fn or undefined if it throws.
 */
export function attempt<T>(fn: () => T): T | undefined;

/**
 * Returns the value returned by fn or the return value of onCatch if it throws.
 */
export function attempt<T, U>(
  fn: () => T,
  onCatch: (error: unknown) => U,
): T | U;

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
