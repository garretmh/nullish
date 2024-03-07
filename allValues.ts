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

export function allValues<T extends Record<PropertyKey, unknown>>(
  object: T,
): object is FilledRecord<T> {
  for (const key in object) {
    if (Object.hasOwn(object, key) && object[key] == null) {
      return false;
    }
  }
  return true;
}

type FilledRecord<T> = { [P in keyof T]: NonNullable<T[P]> };
