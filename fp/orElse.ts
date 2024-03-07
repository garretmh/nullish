import { orElse as _orElse } from "../orElse.ts";

/**
 * Returns a function that returns value if it isn't nullish or else the return
 * value of onNullish
 */
export function orElse<T, U>(
  onNullish: () => U,
): (value: T) => NonNullable<T> | U {
  return (value) => _orElse(value, onNullish);
}
