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
 *
 * @template T
 * @overload
 * @param {() => T} fn
 * @returns {T | undefined}
 */
/**
 * Returns the value returned by fn or the return value of onCatch if it throws.
 *
 * @template T
 * @template U
 * @overload
 * @param {() => T} fn
 * @param {((error: unknown) => U)} onCatch
 * @returns {T | U}
 */
/**
 * @template T
 * @template [U=undefined]
 * @param {() => T} fn
 * @param {((error: unknown) => U)} [onCatch]
 * @returns {T | U | undefined}
 */
export function attempt(fn, onCatch) {
  if (typeof fn !== "function") throw new TypeError();
  try {
    return fn();
  } catch (err) {
    return onCatch?.(err);
  }
}
