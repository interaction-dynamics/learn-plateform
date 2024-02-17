---
title: Clean Code rules
nextjs:
  metadata:
    title: Clean Code rules
    description: Some rules inspired by the book Clean Code
---

The book [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) by Robert C. Martin is a must-read for every developer. It contains a lot of good practices to write better code. Here is a non-exhaustive list of rules inspired by the book.

---

## Boy scout rule

> Leave the campground cleaner than you found it.

from [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) by Robert C. Martin p14.

Because of careless mistakes, rush or feature mistunderstanding, code smells are inevitably and progressively integrated in the code.

You should use the opportunity of adding a feature to refactor the code around.
Even if it can't avoid the addition of new code smell related to the feature, it will ensure that the global code quality will be stable or improved.

{% callout %}
A common mistake of developers is to wait for a dedicated time slot to refactor the code. In reality, this time slot almost never comes.
{% /callout %}

---

## Keep same level of abstraction in function

The statements within our function should all be written at the same level of abstraction. It means that we shouldn't mix low-level details with high-level concepts.

For example:

```ts
// Bad example
function renderDuration(departure: Date, arrival: Date) {
  const durationInMilliseconds = arrival.getTime() - departure.getTime()

  const hours = durationInMilliseconds / 1000 / 60 / 60 // <-- this line has another level of abstraction
  const minutes = (durationInMilliseconds / 1000 / 60) % 60 // <-- this line has another level of abstraction

  return `${hours}h ${minutes}min`
}
```

Your code is like an onion. The top layers contains high level of abstraction where everything is easily understandable while the deepest levels are understanble by only senior devs. Switching between levels require a lot of mental effort. It is better to keep the same level of abstraction in a function. Also it helps junior developers to understand if the code is too complicated for them and they need extra help.

The solution is to extract the low-level details in a dedicated function:

```ts
// Good example
function extractHours(durationInMilliseconds: number) {
  return durationInMilliseconds / 1000 / 60 / 60
}

function extractMinutes(durationInMilliseconds: number) {
  return (durationInMilliseconds / 1000 / 60) % 60
}

function renderDuration(departure: Date, arrival: Date) {
  const durationInMilliseconds = arrival.getTime() - departure.getTime()

  const hours = extractHours(durationInMilliseconds)
  const minutes = extractMinutes(durationInMilliseconds)

  return `${hours}h ${minutes}min`
}
```

---

## Avoid negative conditionals

Negative conditionals are harder to understand than positive conditionals. It is better to avoid them.

For example:

```ts
// Bad example
if (!isUserLoggedIn) {
  // ...
}
```

The solution is to use positive conditionals:

```ts
// Good example
if (isUserLoggedIn) {
  // ...
}
```

---

## Reduce Cognitive complexity

Cognitive complexity is a measure of how difficult it is to understand a section of code. It is based on the number of code paths and the nesting of the code.
More you have code paths and more you have nesting, more the cognitive complexity is high since developer has to keep in mind all the code paths and the nesting to understand the code.

The cognitive complexity is a good indicator of the code readability. It is better to keep it low.

The key is to extract code in dedicated functions. It will reduce the number of code paths and the nesting in the same place.

You can use [SonarQube](https://www.sonarqube.org/) or [Sonarjs Eslint plugin](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md) to measure the cognitive complexity of your code.

---

## Avoid magic numbers

Magic numbers are numbers that appear without any context. They are hard to understand and to maintain.
The solution is to extract the magic number in a dedicated variable with a meaningful name.

For example:

```ts
// Bad example
buildUrl('https://example.com', 323321)

// Good example
const port = 323321
buildUrl('https://example.com', port)
```

> This rule applies to strings and boolean as well.

---

## Avoid flag arguments

Flag arguments are boolean arguments that tell the function to behave in different ways. They are hard to understand and to maintain.

For example:

```ts
// Bad example
function buildUrl(url: string, isSecure: boolean) {
  if (isSecure) {
    return `https://${url}`
  }

  return `http://${url}`
}

// we often see after
buildUrl('example.com', true) // <-- we don't know what true means without reading the function declaration
buildUrl('example.com', false)
```

In addition, flag arguments are a sign that the function is doing more than one thing. It is better to split the function in two functions. Read [Single Responsibility Principle](/docs/code-craftsmanship/solid-principles/single-responsibility-principle) and [Avoid Spaghetti code](#avoid-spaghetti-code) below for more details.

In JS framework, flag arguments can be replaced by composition pattern. Read the article [Keep your React Components maintainable with SOLID & React Composition— CodeCraftsmanship #4](https://medium.com/interaction-dynamics/keep-your-react-components-maintainable-with-solid-react-composition-codecraftsmanship-4-2969834e9ffa) for more details.

---

## Avoid Spaghetti code

Spaghetti code is when the code of multiple feature is mixed together. It is so interingled that it is hard to understand and to maintain. If you want to debug a feature, you have to understand the whole codebase. You can't also easily remove a feature without breaking the whole codebase.

```ts
// Bad example
function buildUrl(url: string, isSecure: boolean) {
  if (isSecure) {
    return `https://${url}`
  }

  return `http://${url}`
}
```

In the example above, the function is doing two things: building the url for both http and https.

Very often, a function is doing two things because it is in control of things that shouldn't be in its scope. A solution is also apply an inversion of control and give the control about one part to another function.

```ts
function buildUrl(protocol: string, url: string) {
  return `${protocol}://${url}`
}

function secureUrl() {
  return 'https
}

buildUrl(secureUrl(), 'example.com') // <-- this code has the responsibility to choose between http and https
```

> The example above is extremely simplistic on purpose. In reality, it will be more complex. The point is to show that the function is doing only one thing. You can see an example in a more realistic context in this presentation [Composition Pattern in React](https://friedrith.github.io/react-composition/slides/#/1).
