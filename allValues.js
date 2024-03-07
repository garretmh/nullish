/**
 * @module
 *
 * A module providing a function to check whether every value in an object is not nullish.
 *
 * @example
 * ```ts
 * import { allValues } from "jsr:@garretmh/nullish/allValues.js";
 *
 * allValues({}) === true
 * allValues({ foo: 'bar', bar: false }) === true
 * allValues({ foo: null, bar: undefined }) === false
 * ```
 */

/**
 * Whether every value of the object is not nullish.
 * @template {Record<PropertyKey, unknown>} T
 * @param {T} object
 * @returns {object is import('./types.ts').RecordOfSome<T>}
 */
export function allValues(object) {
  for (const key in object) {
    if (Object.hasOwn(object, key) && object[key] == null) {
      return false;
    }
  }
  return true;
}
