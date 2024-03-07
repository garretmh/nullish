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
 *
 * @template T
 * @template U
 * @overload
 * @param {T} value
 * @param {(value: NonNullable<T>) => U} onSome
 * @returns {T | undefined}
 */
/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else the return value of onNullish.
 *
 * @template T
 * @template U
 * @template [V = never]
 * @overload
 * @param {T} value
 * @param {(value: NonNullable<T>) => U} onSome
 * @param {() => V} onNullish
 * @returns {T | U | V}
 */
/**
 * @template T
 * @template U
 * @template [V = never]
 * @overload
 * @param {T} value
 * @param {(value: NonNullable<T>) => U} onSome
 * @param {() => V} [onNullish]
 * @returns {T | U | V | undefined}
 */
/**
 * @template T
 * @template U
 * @template [V = never]
 * @param {T} value
 * @param {(value: NonNullable<T>) => U} onSome
 * @param {() => V} [onNullish]
 * @returns {T | U | V | undefined}
 */
export function then(value, onSome, onNullish) {
  if (value != null) {
    return onSome(value);
  }
  if (onNullish) {
    return onNullish();
  }
  return undefined;
}
