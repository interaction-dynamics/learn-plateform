---
title: Don't Repeat Yourself
nextjs:
  metadata:
    title: Don't Repeat Yourself
    description: Don't Repeat Yourself also known as DRY is a software development principle that aims to reduce repetition of software patterns.
---

Don't Repeat Yourself also known as DRY is a software development principle that aims to reduce repetition of software patterns.

Duplication may be considered a bad practice because it creates additional work to maintain or change something that is repeated. Duplication also increases the risk that a change may not be done correctly or a bug may not be fixed everywhere.

---

## How to avoid duplication

Move the duplicated code to a function or a class. If you are using a programming language that supports generics, you can use generics to avoid duplication.

Sometimes, duplications are also a sign that the architecture of your application is not good. Take a step back and think about how you can make your architecture more generic.

---

## Sometimes duplication is better

Sometimes it is better to duplicate code than to have complex code that is hard to understand or to update.

Also your code should be considered as specification. For example, if you are writing code to enable or disable the same business rule for two different features. It might be better to duplicate to show that the business rules are the same for these two features.

For example, duplication is authorized in the following case:

```ts
// feature 1
enableBusinessRule1(true)
enableBusinessRule2(false)
enableBusinessRule3(true)

// feature 2
enableBusinessRule1(true)
enableBusinessRule2(false)
enableBusinessRule3(true)

// feature 3
enableBusinessRule1(false)
enableBusinessRule2(false)
enableBusinessRule3(false)
```

Duplication in test files is also something that is acceptable. It is better to have duplication in test files than to have complex code that is hard to understand.

However, too many duplications is not healthy. So consider the example above as an edge case. If it happens too often, it is probably a sign that your architecture should be refactored.
