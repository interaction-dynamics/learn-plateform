---
title: Typescript
nextjs:
  metadata:
    title: Typescript
    description: Always use typescript in your projects
---

Always use typescript in your projects. There shouldn't be any exception.

---

## Why typescript?

Your IDE will help you to complete your code. It exists on javascript but it is not as performant.

With typescript, it is easier for new developers to onboard on a project. They can easily understand the codebase and the typescript compiler will help them to avoid mistakes.

Typescript will help you to refactor your code. You can rename a property and the compiler will tell you where you need to update your code.

Typescript will help you to understand the codebase. You can easily know what is the type of a variable or a function parameter. And since Typescript is intrincated to the code, it will always be up to date.

---

## How to use typescript?

Typescript is not like other typed languages. It is more flexible. It also means you have different ways to do the same thing. But they are not always equivalent.

### Enum or string union

If you want to allow only some values, for example for flags, you can use an enum or a string union.

With enum:

```ts
enum status {
  pending = 'pending',
  done = 'done',
  canceled = 'canceled',
}

function updateStatus(status: status) {
  // ...
}
```

With union:

```ts
type status = 'pending' | 'done' | 'canceled'

function updateStatus(status: status) {
  // ...
}
```

In the ecosystem, developers are divided between these two solutions. Check the table below a summary of the differences between enums and unions.

|                       | Enum | Union |
| --------------------- | ---- | ----- |
| Declaring & accessing | +2   |       |
| Extending             | +1   |       |
| Iterating             |      | +1    |
| Renaming              |      | +2    |

**Conclusion:** unions seems to be more popular for light cases and design systems but enums are more powerful.

Useful links:

- [Should You Use Enums or Union Types in Typescript?](https://www.bam.tech/en/article/should-you-use-enums-or-union-types-in-typescript)
- [Union Types vs. Enums in TypeScript](https://javascript.plainenglish.io/union-types-vs-enums-in-typescript-a43c2c01c5fa)

### Type or interface

If you want to define a type, you can use a type or an interface.

```ts
type User = {
  name: string
  age: number
}
// OR
interface User {
  name: string
  age: number
}
```

They are very similar but there are some differences. For example, you can use `extends` with an interface but not with a type.
So it is better to use an interface.

Of course in case of union or intersection, you have to use a type.
