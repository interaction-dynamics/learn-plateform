---
title: Pure functions
nextjs:
  metadata:
    title: Pure functions
    description: Pure functions are functions that always return the same output for the same input. They improve the readibility of your code.
---

Pure functions are functions that always return the same output for the same input. Code is pure function is faster to read since the scope of the function is limited to its arguments and the return value. Pure functions are also easier to test since they don't have side effects.

In javascript, pure functions are easy to use thanks to anonymous functions and arrow functions.

So pure functions should be used as much as possible, for example to manipulate arrays.

For example:

```ts
// BAD
let numberOfEvenNumbers = 0

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    numberOfEvenNumbers++
  }
}

// GOOD
const numberOfEvenNumbers = array.filter((number) => number % 2 === 0).length

// Event BETTER
const isEven = (number) => number % 2 === 0
const numberOfEvenNumbers = array.filter(isEven).length
```

It makes the code easier to read and also easier to test since you can extract the pure function and test it separately.

---

## Resources

Javascript provides a lot of functions requiring a pure function as argument like:

- [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`Array.prototype.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [`Array.prototype.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [`Array.prototype.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
