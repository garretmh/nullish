# Nullish helpers

Simple helper functions for nullish values.

## Usage

Import a single helper

```ts
import { then } from "@garretmh/nullish/then.js";
```

Import all helpers when using multiple

```ts
import * as nullish from "@garretmh/nullish";
```

### Functional programming

Import a functional programming version of a helper (not all helpers have
functional variants)

```ts
import { then } from "@garretmh/nullish/fp/then.js";
```

Import all helpers with the functional versions of helpers that have them

```ts
import * as nullish from "@garretmh/nullish/fp";
```

## Publishing

```sh
deno fmt
deno lint
deno test
# deno bench
# deno coverage
deno publish
```
