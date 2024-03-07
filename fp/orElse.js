import { orElse as _orElse } from "../orElse.js";

/**
 * Returns value if it isn't nullish or else the return value of onNullish
 *
 * @template T
 * @template U
 * @param {() => U} onNullish
 * @returns {(value: T) => T | U}
 */
export function orElse(onNullish) {
  return (value) => _orElse(value, onNullish);
}
