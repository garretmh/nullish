import { then as _then } from "../then.js";

/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else undefined.
 *
 * @template T
 * @template U
 * @overload
 * @param {(value: NonNullable<T>) => U} onSome
 * @returns {(value: T) => T | undefined}
 */
/**
 * Returns the return value of onSome when the passed value is not nullable,
 * or else the return value of onNullish.
 *
 * @template T
 * @template U
 * @template [V = never]
 * @overload
 * @param {(value: NonNullable<T>) => U} onSome
 * @param {() => V} onNullish
 * @returns {(value: T) => T | U | V}
 */
/**
 * @template T
 * @template U
 * @template [V = never]
 * @overload
 * @param {(value: NonNullable<T>) => U} onSome
 * @param {() => V} [onNullish]
 * @returns {(value: T) => T | U | V | undefined}
 */
/**
 * @template T
 * @template U
 * @template [V = never]
 * @param {(value: NonNullable<T>) => U} onSome
 * @param {() => V} [onNullish]
 * @returns {(value: T) => T | U | V | undefined}
 */
export function then(onSome, onNullish) {
  return (value) => _then(value, onSome, onNullish);
}
