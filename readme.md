# Learn Typescript

[Beginners course](https://www.youtube.com/watch?v=BwuLxPH8IDs)

## Setup

- `npm i`
- `npm start` to run server and watch `ts` file changes
- `npm run build` compile all `ts` to `js`

### Learning notes

#### 22 May 2020

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
  name: 'jones',
  age: 29
}
```

- Array support the core type, `list: string[]` all values in array must be of type `string`. `list: any[]` means any value type can be stored.