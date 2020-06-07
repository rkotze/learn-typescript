# Learn Typescript

[Beginners course](https://www.youtube.com/watch?v=BwuLxPH8IDs)

- [Learn Typescript](#learn-typescript)
  - [Setup](#setup)
  - [Learning notes](#learning-notes)
      - [22 May 2020 basics](#22-may-2020-basics)
      - [25th May 2020 basics](#25th-may-2020-basics)
      - [7th June 2020](#7th-june-2020)

## Setup

- `npm i`
- `npm start` to run server and watch `ts` file changes
- `npm run build` compile all `ts` to `js`

## Learning notes

#### 22 May 2020 basics

- Typescript uses static types and evaluates during compiling the code. Quick feedback look that there is an issue in the code.
- Core types: `number, boolean, string`
- By assigning a variable, TypeScript will infer the type.
- Object types: generic options `const person : object` or `const person: {}`. However, if you did `person.name` it will error as `name` is not defined.
- Explicit object type include `key: <type>;` prior assignment.

Example explicit object type but prefer inferred for object literals

```typescript
const person: {
  name: string;
  age: number;
} = {
  name: "jones",
  age: 29,
};
```

- Array support the core type, `list: string[]` all values in array must be of type `string`. `list: any[]` means any value type can be stored.
- **Tuples** is a TypeScript type, fixed length array which can have mixed value types
- `[].push` is an exception from erroring when adding to the array.

Inferring no longer helps us when we want to use a tuple and be explicit about type and length.

```typescript
const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "jones",
  age: 29,
  role: [1, "author"],
};
```

#### 25th May 2020 basics

- Enums in TypeScript not JavaScript. Define new enum `enum <TypeName> {}` automatically assigns numbers to labels in order from zero by default.
- Assign values to labels can be any value `{ ADMIN = 'ADMIN', AUTHOR: 5 }`
- `any` will match any type but this is the same as vanilla JS and **negates the use of TypeScript**.
- Union type to set multiple types using `|`. e.g. `input: number | string`. Probably will need to use `typeof` operator to branch logic.
- Literal types are useful with union types as you can specify a list of valid values e.g. `conversion: 'as-number' | 'as-text'`
- Create **alias** types which allow you to combine types that are repeated through the code. `type Combinable = number | string`
- TypeScript uses `void` type for functions which do not "return" explicitly. TypeScript distinguishes a difference between `return undefined` and JS implicit `return undefined` for functions without a return.

#### 7th June 2020
