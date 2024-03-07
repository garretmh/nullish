import { filter as _filter } from "../filter.ts";

export function filter<T, U extends T>(
  predicate: (value: T) => value is U,
): (value: T) => U | undefined;

export function filter<T>(
  predicate: (value: T) => boolean,
): (value: T) => NonNullable<T> | undefined;

export function filter<T>(
  predicate: (value: T) => boolean,
): (value: T) => NonNullable<T> | undefined {
  return (value) => _filter(value, predicate);
}
