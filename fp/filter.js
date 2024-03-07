import { filter as _filter } from "../filter.js";

/**
 * @template T
 * @overload
 * @param {(value: T) => boolean} predicate
 * @returns {(value: T) => NonNullable<T> | undefined}
 */
/**
 * @template T
 * @template {NonNullable<T>} U
 * @overload
 * @param {(value: T) => value is U} predicate
 * @returns {(value: T) => U | undefined}
 */
/**
 * @template T
 * @param {(value: T) => boolean} predicate
 * @returns {(value: T) => NonNullable<T> | undefined}
 */
export function filter(predicate) {
  return (value) => _filter(value, predicate);
}
