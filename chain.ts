// deno-lint-ignore-file no-explicit-any

import { and, AndMultiple } from "./and.ts";
import { andThen } from "./andThen.ts";
import { filter } from "./filter.ts";
import { Or } from "./or.ts";
import { or, OrMultiple } from "./or.ts";
import { orElse } from "./orElse.ts";
import { XOR, xor } from "./xor.ts";

/** Wrapper for chaining together nullish operations. */
class NullishChain<T> {
  constructor(
    /** The result of the chain of operations */
    public value: T,
  ) {}

  /** Whether the chain results in a non-nullish value */
  get isNullish(): T extends null | undefined ? true : false {
    // @ts-expect-error ts can't tell
    return this.value == null;
  }

  /** Whether the chain results in a nullish value */
  get notNullish(): T extends null | undefined ? false : true {
    // @ts-expect-error ts can't tell
    return this.value != null;
  }

  /**
   * Logical AND for nullish rather than truthy values.
   */
  and<U>(otherValue: U): NullishChain<T extends null | undefined ? T : U>;

  /**
   * Logical AND for nullish rather than truthy values.
   */
  and<const U extends unknown[]>(
    ...values: U
  ): NullishChain<AndMultiple<[T, ...U]>>;

  /**
   * Logical AND for nullish rather than truthy values.
   */
  and<const U extends unknown[]>(
    ...values: U
  ): NullishChain<ReturnType<typeof and>> {
    const value = and<[T, ...U]>(this.value, ...values);
    const _this: NullishChain<typeof value> = this as NullishChain<any>;
    _this.value = value;
    return _this;
  }

  /**
   * Returns the return value of onSome when the passed value is not nullable,
   * or else undefined.
   */
  andThen<U>(
    onSome: (value: NonNullable<T>) => U,
  ): NullishChain<T extends null | undefined ? undefined : U>;

  /**
   * Returns the return value of onSome when the passed value is not nullable,
   * or else the return value of onNullish.
   */
  andThen<U, V>(
    onSome: (value: NonNullable<T>) => U,
    onNullish: () => V,
  ): NullishChain<T extends null | undefined ? V : U>;

  /**
   * Returns the return value of onSome when the passed value is not nullable,
   * or the return value of onNullish if it is passed or else undefined.
   */
  andThen<U, V = never>(
    onSome: (value: NonNullable<T>) => U,
    onNullish?: () => V,
  ): NullishChain<T extends null | undefined ? V | undefined : U>;

  /**
   * Returns the return value of onSome when the passed value is not nullable,
   * or the return value of onNullish if it is passed or else undefined.
   */
  andThen<U, V = never>(
    onSome: (value: NonNullable<T>) => U,
    onNone?: () => V,
  ): NullishChain<ReturnType<typeof andThen<T, U, V>>> {
    const value = andThen<T, U, V>(this.value, onSome, onNone);
    const _this: NullishChain<typeof value> = this as NullishChain<any>;
    _this.value = value;
    return _this;
  }

  /**
   * Logical OR for nullish rather than truthy values.
   *
   * Equivalent to the nullish coalescing operator (`??`).
   */
  or<U>(otherValue: U): NullishChain<Or<T, U>>;

  /**
   * Logical OR for nullish rather than truthy values.
   */
  or<const U extends unknown[]>(
    ...values: U
  ): NullishChain<OrMultiple<[T, ...U]>>;

  /**
   * Logical OR for nullish rather than truthy values.
   */
  or<const U extends unknown[]>(
    ...values: U
  ): NullishChain<ReturnType<typeof or>> {
    const value = or<[T, ...U]>(this.value, ...values);
    const _this: NullishChain<typeof value> = this as NullishChain<any>;
    _this.value = value;
    return _this;
  }

  /**
   * Returns value if it isn't nullish or else the return value of onNullish
   */
  orElse<U>(
    onNullish: () => U,
  ): NullishChain<T extends null | undefined ? U : T>;

  /**
   * Returns value if it isn't nullish or else the return value of onNullish
   */
  orElse<U>(
    onNullable: () => U,
  ): NullishChain<ReturnType<typeof orElse<T, U>>> {
    const value = orElse<T, U>(this.value, onNullable);
    const _this: NullishChain<typeof value> = this as NullishChain<any>;
    _this.value = value;
    return _this;
  }

  /**
   * Perform a test on a value if it isn't nullish. Returns the value if it isn't
   * nullish and it passes the test, or else undefined.
   */
  filter<U extends NonNullable<T>>(
    predicate: (value: T) => value is U,
  ): NullishChain<U | undefined>;

  /**
   * Perform a test on a value if it isn't nullish. Returns the value if it isn't
   * nullish and it passes the test, or else undefined.
   */
  filter(
    predicate: (value: T) => boolean,
  ): NullishChain<NonNullable<T> | undefined>;

  /**
   * Perform a test on a value if it isn't nullish. Returns the value if it isn't
   * nullish and it passes the test, or else undefined.
   */
  filter(
    predicate: (value: T) => boolean,
  ): NullishChain<ReturnType<typeof filter<T>>> {
    const value = filter<T>(this.value, predicate);
    const _this: NullishChain<typeof value> = this as NullishChain<any>;
    _this.value = value;
    return _this;
  }

  /**
   * Logical XOR for nullish rather than truthy values.
   *
   * @returns the right-hand side parameter when either the left-hand side
   * parameter is nullish or the right-hand side parameter is nullish but not
   * both.
   */
  xor<U>(otherValue: U): NullishChain<XOR<T, U>> {
    const value = xor(this.value, otherValue);
    const _this: NullishChain<typeof value> = this as NullishChain<any>;
    _this.value = value;
    return _this;
  }
}

/**
 * Chain multiple nullish operations
 *
 * Warning: Methods change the value by mutation not copy. Avoid assigning
 *   intermediary steps to variables.
 *
 * @example
 * ```ts
 * chain(maybeAValue).andThen(String).else('').value
 * chain(maybeNumber).filter((x) => x > 0).notNullable
 * ```
 */
export function chain<T>(value: T): NullishChain<T> {
  return new NullishChain(value);
}
