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

- same level of abstraction
