type SomeOrNone<T> = NonNullable<T> extends never ? undefined : NonNullable<T>;

type NoNullishArray<T extends readonly unknown[] | []> = T[number] extends
  NonNullable<T[number]> ? T : never;
export type ArrayOfSome<T extends readonly unknown[]> = NoNullishArray<
  {
    -readonly [P in keyof T]: SomeOrNone<T[P]>;
  }
>;

type NoNullishRecord<T extends Record<PropertyKey, unknown>> =
  T[keyof T] extends NonNullable<T[keyof T]> ? T : never;
export type RecordOfSome<T extends Record<PropertyKey, unknown>> =
  NoNullishRecord<
    {
      [P in keyof T]: SomeOrNone<T[P]>;
    }
  >;
