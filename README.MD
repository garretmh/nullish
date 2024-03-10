# Nullish helpers

Simple helper functions for nullish values.

## Explanation

I created this in response to the many packages I've seen that attempt to port
[Rust Option](https://doc.rust-lang.org/std/option/) to JavaScript. I like the
Option type but I don't think it makes much sense in JavaScript. Instead, I
wrote some helpers to perform many of the same actions for "nullable" values.
This largely avoids wrapping values in objects, except when using the `chain`
helper to chain multiple operations together. It entirely avoids using immutable
wrapper objects as almost all Option implementations do, which avoids creating
and disposing of new objects on every operation.

Note that some of these helpers are fairly pointless. For example, `or` is
essentially a function that calls `??`. But I decided I wanted a certain level
of completeness so here they are.

## Usage

Import a single helper

```ts
import { andThen } from "@garretmh/nullish/andThen.js";
```

Import all helpers when using multiple

```ts
import * as nullish from "@garretmh/nullish";
```

### Functional programming

Import a functional version of a helper (not all helpers have a functional
variant)

```ts
import { andThen } from "@garretmh/nullish/fp/andThen.js";
```

Import all helpers using functional versions of those that have them

```ts
import * as nullish from "@garretmh/nullish/fp";
```

## License

MIT
